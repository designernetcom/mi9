<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=UTF-8');

error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

// ============================================
// JSON RESPONSE
// ============================================

function response(
    bool $success,
    string $message,
    int $status = 200
): void {
    http_response_code($status);

    echo json_encode([
        'success' => $success,
        'message' => $message
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

// ============================================
// ONLY POST REQUEST
// ============================================

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    response(false, 'Invalid request method.', 405);
}

// ============================================
// CONFIGURATION
// ============================================

$apiUrl = 'https://netcomindia.in/contact-form/mail-api.php';

$apiKey = 'netcom@123';

$RECAPTCHA_SECRET = '6Lf1ETAuAAAAAFgJRAtmvvIL1DC_JCIkycIdCrkm';

$TO_EMAIL = 'designernetcom@gmail.com';
$TO_NAME = 'MI9 International';
$FROM_NAME = 'MI9 International';

// ============================================
// GET FORM VALUES
// ============================================

function getField(string $key): string
{
    $value = $_POST[$key] ?? '';

    return is_string($value) ? trim($value) : '';
}

$name = getField('name');
$companyName = getField('companyName');
$email = getField('email');
$phone = getField('phone');
$country = getField('country');
$product = getField('product');
$message = getField('message');
$recaptchaToken = getField('recaptcha_token');

// ============================================
// VALIDATION
// ============================================

if ($name === '') {
    response(false, 'Please enter your full name.', 422);
}

if (
    mb_strlen($name) > 100 ||
    !preg_match("/^[\p{L}\s.'-]+$/u", $name)
) {
    response(false, 'Please enter a valid name.', 422);
}

if (mb_strlen($companyName) > 150) {
    response(false, 'Company name is too long.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    response(false, 'Please enter a valid email address.', 422);
}

if (!preg_match('/^[0-9+\-\s().]{7,20}$/', $phone)) {
    response(false, 'Please enter a valid phone number.', 422);
}

$allowedCountries = [
    'United Kingdom',
    'Europe',
    'Gulf Countries',
    'Middle East',
    'Other'
];

if (!in_array($country, $allowedCountries, true)) {
    response(false, 'Please select a valid country or market.', 422);
}

if ($product === '') {
    response(false, 'Please enter your product requirement.', 422);
}

if (mb_strlen($product) > 250) {
    response(false, 'Product requirement is too long.', 422);
}

if ($message === '') {
    response(false, 'Please enter your message.', 422);
}

if (mb_strlen($message) > 2000) {
    response(false, 'Message is too long.', 422);
}

if ($recaptchaToken === '') {
    response(false, 'reCAPTCHA verification is required.', 422);
}

// ============================================
// MAIN PROCESS
// ============================================

try {

    // ========================================
    // LOAD PHPMAILER
    // ========================================

    $mailerPath = __DIR__ . '/PHPMailer/src/';

    $requiredFiles = [
        'Exception.php',
        'PHPMailer.php',
        'SMTP.php'
    ];

    foreach ($requiredFiles as $file) {

        if (!is_file($mailerPath . $file)) {
            throw new RuntimeException(
                'Missing PHPMailer file: ' . $file
            );
        }

        require_once $mailerPath . $file;
    }

    // ========================================
    // VERIFY RECAPTCHA
    // ========================================

    $ch = curl_init(
        'https://www.google.com/recaptcha/api/siteverify'
    );

    curl_setopt_array($ch, [
        CURLOPT_POST => true,

        CURLOPT_POSTFIELDS => http_build_query([
            'secret' => $RECAPTCHA_SECRET,
            'response' => $recaptchaToken,
            'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
        ]),

        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_SSL_VERIFYPEER => true,

        CURLOPT_HTTPHEADER => [
            'Content-Type: application/x-www-form-urlencoded'
        ]
    ]);

    $recaptchaResponse = curl_exec($ch);
    $recaptchaError = curl_error($ch);
    $recaptchaHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    if (
        $recaptchaResponse === false ||
        $recaptchaHttpCode !== 200
    ) {
        error_log('reCAPTCHA Error: ' . $recaptchaError);

        response(
            false,
            'Unable to verify reCAPTCHA. Please try again.',
            500
        );
    }

    $recaptchaResult = json_decode(
        $recaptchaResponse,
        true
    );

    if (
        !is_array($recaptchaResult) ||
        empty($recaptchaResult['success'])
    ) {
        response(false, 'reCAPTCHA verification failed.', 422);
    }

    if (
        ($recaptchaResult['action'] ?? '') !== 'contact_form'
    ) {
        response(false, 'Invalid reCAPTCHA action.', 422);
    }

    if (
        (float) ($recaptchaResult['score'] ?? 0) < 0.5
    ) {
        response(
            false,
            'reCAPTCHA verification failed. Please try again.',
            422
        );
    }

    // ========================================
    // GET CENTRAL MAIL CONFIGURATION
    // ========================================

    $ch = curl_init($apiUrl);

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,

        CURLOPT_HTTPHEADER => [
            'X-API-Key: ' . $apiKey,
            'Accept: application/json'
        ],

        CURLOPT_TIMEOUT => 10,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_SSL_VERIFYPEER => true
    ]);

    $apiResponse = curl_exec($ch);
    $apiError = curl_error($ch);

    $httpCode = curl_getinfo(
        $ch,
        CURLINFO_HTTP_CODE
    );

    curl_close($ch);

    if ($apiResponse === false) {

        error_log('Central Mail API Error: ' . $apiError);

        response(
            false,
            'Unable to connect to central mail server.',
            500
        );
    }

    if ($httpCode !== 200) {
        response(
            false,
            'Unable to load central mail configuration.',
            500
        );
    }

    $mailConfig = json_decode($apiResponse, true);

    if (
        !is_array($mailConfig) ||
        ($mailConfig['success'] ?? false) !== true ||
        empty($mailConfig['gmail_username']) ||
        empty($mailConfig['gmail_app_password'])
    ) {
        response(
            false,
            'Invalid mail configuration received.',
            500
        );
    }

    $gmailUsername = $mailConfig['gmail_username'];
    $gmailAppPassword = $mailConfig['gmail_app_password'];

    // ========================================
    // ESCAPE HTML VALUES
    // ========================================

    function escapeHtml(string $value): string
    {
        return htmlspecialchars(
            $value,
            ENT_QUOTES | ENT_SUBSTITUTE,
            'UTF-8'
        );
    }

    $safeName = escapeHtml($name);

    $safeCompany = escapeHtml(
        $companyName !== '' ? $companyName : 'Not provided'
    );

    $safeEmail = escapeHtml($email);
    $safePhone = escapeHtml($phone);
    $safeCountry = escapeHtml($country);
    $safeProduct = escapeHtml($product);
    $safeMessage = nl2br(escapeHtml($message));

    // ========================================
    // PHPMAILER SMTP CONFIGURATION
    // ========================================

    $mail = new PHPMailer(true);

    $mail->isSMTP();

    $mail->Host = 'smtp.gmail.com';

    $mail->SMTPAuth = true;

    $mail->Username = $gmailUsername;

    $mail->Password = $gmailAppPassword;

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->Port = 587;

    $mail->Timeout = 30;

    $mail->CharSet = 'UTF-8';

    // ========================================
    // SENDER AND RECIPIENT
    // ========================================

    $mail->setFrom(
        $gmailUsername,
        $FROM_NAME
    );

    $mail->addAddress(
        $TO_EMAIL,
        $TO_NAME
    );

    $mail->addReplyTo(
        $email,
        $name
    );

    // ========================================
    // EMAIL SUBJECT
    // ========================================

    $mail->isHTML(true);

    $mail->Subject = 'MI9 International - New Website Enquiry';

    // ========================================
    // EMAIL BODY
    // ========================================

    $mail->Body = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Website Enquiry</title>
    </head>

    <body style="
        margin:0;
        padding:20px;
        background:#f4f6f8;
        font-family:Arial,Helvetica,sans-serif;
    ">

        <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
                max-width:650px;
                margin:auto;
                background:#ffffff;
                border-collapse:collapse;
                border:1px solid #eeeeee;
            "
        >

            <tr>
                <td colspan="2" style="
                    padding:24px;
                    background:#173b2b;
                    color:#ffffff;
                    font-size:22px;
                    font-weight:bold;
                ">
                    MI9 International
                    <div style="
                        font-size:14px;
                        font-weight:normal;
                        margin-top:8px;
                    ">
                        New Website Enquiry
                    </div>
                </td>
            </tr>

            <tr>
                <td colspan="2" style="
                    padding:20px;
                    color:#444444;
                    font-size:14px;
                ">
                    You have received a new enquiry
                    from the MI9 International website.
                </td>
            </tr>

            <tr>
                <td style="
                    padding:14px;
                    width:180px;
                    font-weight:bold;
                    border-bottom:1px solid #eeeeee;
                ">
                    Full Name
                </td>

                <td style="
                    padding:14px;
                    border-bottom:1px solid #eeeeee;
                ">
                    ' . $safeName . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:14px;
                    font-weight:bold;
                    border-bottom:1px solid #eeeeee;
                ">
                    Company Name
                </td>

                <td style="
                    padding:14px;
                    border-bottom:1px solid #eeeeee;
                ">
                    ' . $safeCompany . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:14px;
                    font-weight:bold;
                    border-bottom:1px solid #eeeeee;
                ">
                    Email Address
                </td>

                <td style="
                    padding:14px;
                    border-bottom:1px solid #eeeeee;
                ">
                    ' . $safeEmail . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:14px;
                    font-weight:bold;
                    border-bottom:1px solid #eeeeee;
                ">
                    Phone / WhatsApp
                </td>

                <td style="
                    padding:14px;
                    border-bottom:1px solid #eeeeee;
                ">
                    ' . $safePhone . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:14px;
                    font-weight:bold;
                    border-bottom:1px solid #eeeeee;
                ">
                    Country / Market
                </td>

                <td style="
                    padding:14px;
                    border-bottom:1px solid #eeeeee;
                ">
                    ' . $safeCountry . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:14px;
                    font-weight:bold;
                    border-bottom:1px solid #eeeeee;
                ">
                    Product / Requirement
                </td>

                <td style="
                    padding:14px;
                    border-bottom:1px solid #eeeeee;
                ">
                    ' . $safeProduct . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:14px;
                    font-weight:bold;
                    vertical-align:top;
                ">
                    Message
                </td>

                <td style="padding:14px;">
                    ' . $safeMessage . '
                </td>
            </tr>

            <tr>
                <td colspan="2" style="
                    padding:18px;
                    background:#f3f6f4;
                    text-align:center;
                    color:#666666;
                    font-size:12px;
                ">
                    This enquiry was submitted through
                    the MI9 International website.
                </td>
            </tr>

        </table>

    </body>
    </html>';

    // ========================================
    // PLAIN TEXT EMAIL
    // ========================================

    $mail->AltBody =
        "MI9 International - New Website Enquiry\n\n" .
        "Full Name: " . $name . "\n" .
        "Company Name: " . $companyName . "\n" .
        "Email: " . $email . "\n" .
        "Phone: " . $phone . "\n" .
        "Country: " . $country . "\n" .
        "Product: " . $product . "\n\n" .
        "Message:\n" . $message;

    // ========================================
    // SEND EMAIL
    // ========================================

    $mail->send();

    response(
        true,
        'Thank you for contacting MI9 International. Our team will get back to you shortly.'
    );

} catch (Throwable $e) {

    error_log(
        'MI9 Contact Form Error: ' . $e->getMessage()
    );

    response(
        false,
        'Unable to send your enquiry. Please try again later.',
        500
    );
}