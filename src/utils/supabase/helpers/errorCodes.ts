const authErrorCodes = {
  anonymous_provider_disabled: {
    title: "Sign-In Disabled",
    message:
      "Anonymous sign-ins are currently disabled. Please contact support.",
  },
  bad_code_verifier: {
    title: "Invalid Code Verifier",
    message: "The provided code verifier does not match. Please try again.",
  },
  bad_json: {
    title: "Invalid Request",
    message: "The request contains invalid JSON. Please check and try again.",
  },
  bad_jwt: {
    title: "Authentication Failed",
    message: "Invalid authentication token. Please log in again.",
  },
  bad_oauth_callback: {
    title: "OAuth Callback Error",
    message: "OAuth provider did not return all required attributes.",
  },
  bad_oauth_state: {
    title: "OAuth State Error",
    message:
      "The state returned by the OAuth provider is not in the correct format.",
  },
  captcha_failed: {
    title: "Captcha Verification Failed",
    message: "Captcha verification could not be completed. Please try again.",
  },
  conflict: {
    title: "Conflict Detected",
    message: "A conflict occurred. Please wait a moment and try again.",
  },
  email_address_not_authorized: {
    title: "Email Not Authorized",
    message:
      "Email sending is not allowed for this address. Please set up a custom SMTP provider.",
  },
  email_conflict_identity_not_deletable: {
    title: "Cannot Unlink Identity",
    message:
      "Unlinking this identity would cause a conflict with another account.",
  },
  email_exists: {
    title: "Email Exists",
    message: "This email address is already registered.",
  },
  email_not_confirmed: {
    title: "Email Not Confirmed",
    message: "Please confirm your email before signing in.",
  },
  email_provider_disabled: {
    title: "Email Signups Disabled",
    message: "Signups using email are disabled. Please contact support.",
  },
  flow_state_expired: {
    title: "Session Expired",
    message: "Your session has expired. Please sign in again.",
  },
  flow_state_not_found: {
    title: "Session Not Found",
    message: "The session related to this request no longer exists.",
  },
  hook_payload_over_size_limit: {
    title: "Payload Too Large",
    message: "The request payload exceeds the size limit.",
  },
  hook_timeout: {
    title: "Request Timeout",
    message: "Unable to complete the request within the time limit.",
  },
  hook_timeout_after_retry: {
    title: "Timeout After Retry",
    message: "Unable to reach the service after multiple retries.",
  },
  identity_already_exists: {
    title: "Identity Exists",
    message: "This identity is already linked to a user.",
  },
  identity_not_found: {
    title: "Identity Not Found",
    message: "The identity related to this request does not exist.",
  },
  insufficient_aal: {
    title: "Authentication Level Low",
    message:
      "A higher level of authentication is required. Please complete MFA.",
  },
  invite_not_found: {
    title: "Invite Not Found",
    message: "This invite is either expired or has already been used.",
  },
  invalid_credentials: {
    title: "Invalid Login Credentials",
    message:
      "The login credentials provided are incorrect. Please try again or Reset your Password.",
  },
  manual_linking_disabled: {
    title: "Linking Disabled",
    message: "Manual linking of accounts is disabled. Please contact support.",
  },
  mfa_challenge_expired: {
    title: "MFA Challenge Expired",
    message: "The MFA challenge has expired. Please request a new challenge.",
  },
  mfa_factor_name_conflict: {
    title: "MFA Name Conflict",
    message: "Two MFA factors cannot have the same name.",
  },
  mfa_factor_not_found: {
    title: "MFA Factor Not Found",
    message: "The MFA factor no longer exists.",
  },
  mfa_ip_address_mismatch: {
    title: "IP Address Mismatch",
    message: "MFA enrollment must begin and end with the same IP address.",
  },
  mfa_verification_failed: {
    title: "MFA Verification Failed",
    message: "The verification code for MFA is incorrect.",
  },
  mfa_verification_rejected: {
    title: "MFA Verification Rejected",
    message: "Further MFA verification is rejected. Please try again later.",
  },
  mfa_verified_factor_exists: {
    title: "MFA Factor Exists",
    message: "A verified MFA factor for this user already exists.",
  },
  mfa_totp_enroll_disabled: {
    title: "TOTP Enrollment Disabled",
    message: "Enrollment of MFA TOTP factors is currently disabled.",
  },
  mfa_totp_verify_disabled: {
    title: "TOTP Verification Disabled",
    message: "Verification of MFA TOTP factors is disabled.",
  },
  mfa_phone_enroll_disabled: {
    title: "Phone Enrollment Disabled",
    message: "Enrollment of MFA Phone factors is disabled.",
  },
  mfa_phone_verify_disabled: {
    title: "Phone Verification Disabled",
    message: "Verification of MFA Phone factors is disabled.",
  },
  no_authorization: {
    title: "Authorization Missing",
    message: "Authorization is required but not provided.",
  },
  not_admin: {
    title: "Admin Access Required",
    message: "You do not have admin access to perform this action.",
  },
  oauth_provider_not_supported: {
    title: "Provider Not Supported",
    message: "The OAuth provider you are trying to use is not supported.",
  },
  otp_disabled: {
    title: "OTP Disabled",
    message: "Sign in with OTPs is disabled. Please contact support.",
  },
  otp_expired: {
    title: "OTP Expired",
    message: "The OTP code has expired. Please request a new one.",
  },
  over_email_send_rate_limit: {
    title: "Email Rate Limit Reached",
    message:
      "Too many emails have been sent to this address. Please wait and try again.",
  },
  over_request_rate_limit: {
    title: "Request Rate Limit Reached",
    message:
      "Too many requests have been sent from this IP. Please wait and try again.",
  },
  over_sms_send_rate_limit: {
    title: "SMS Rate Limit Reached",
    message:
      "Too many SMS messages have been sent to this number. Please wait and try again.",
  },
  phone_exists: {
    title: "Phone Number Exists",
    message: "This phone number is already registered.",
  },
  phone_not_confirmed: {
    title: "Phone Number Not Confirmed",
    message: "Please confirm your phone number before signing in.",
  },
  phone_provider_disabled: {
    title: "Phone Signups Disabled",
    message: "Signups using phone numbers are disabled.",
  },
  provider_disabled: {
    title: "Provider Disabled",
    message: "This OAuth provider is disabled. Please contact support.",
  },
  provider_email_needs_verification: {
    title: "Email Verification Needed",
    message: "The OAuth provider requires email verification.",
  },
  reauthentication_needed: {
    title: "Reauthentication Required",
    message: "Please reauthenticate to continue.",
  },
  reauthentication_not_valid: {
    title: "Invalid Reauthentication",
    message: "Reauthentication failed. Please request a new code.",
  },
  request_timeout: {
    title: "Request Timeout",
    message: "The request took too long. Please try again.",
  },
  same_password: {
    title: "Same Password",
    message: "The new password cannot be the same as the old one.",
  },
  saml_assertion_no_email: {
    title: "SAML Email Missing",
    message:
      "No email found in the SAML assertion. Please check your provider.",
  },
  saml_assertion_no_user_id: {
    title: "SAML User ID Missing",
    message:
      "No user ID found in the SAML assertion. Please check your provider.",
  },
  saml_entity_id_mismatch: {
    title: "SAML Entity ID Mismatch",
    message: "The SAML entity ID does not match. Please create a new provider.",
  },
  saml_idp_already_exists: {
    title: "SAML IDP Exists",
    message: "This SAML identity provider is already registered.",
  },
  saml_idp_not_found: {
    title: "SAML IDP Not Found",
    message: "The SAML identity provider is not found.",
  },
  saml_metadata_fetch_failed: {
    title: "SAML Metadata Fetch Failed",
    message: "Failed to fetch SAML metadata from the provided URL.",
  },
  saml_provider_disabled: {
    title: "SAML Provider Disabled",
    message: "SAML provider is disabled. Please contact support.",
  },
  saml_relay_state_expired: {
    title: "SAML Relay State Expired",
    message: "The SAML relay state has expired. Please sign in again.",
  },
  saml_relay_state_not_found: {
    title: "SAML Relay State Not Found",
    message: "The SAML relay state no longer exists. Please sign in again.",
  },
  session_not_found: {
    title: "Session Not Found",
    message: "The session no longer exists. Please log in again.",
  },
  sms_provider_not_found: {
    title: "SMS Provider Missing",
    message: "No SMS provider found. Please configure an SMS provider.",
  },
  totp_code_invalid: {
    title: "Invalid TOTP Code",
    message: "The TOTP code is invalid. Please try again.",
  },
  totp_code_verification_rate_limit_exceeded: {
    title: "TOTP Verification Limit Exceeded",
    message: "You have exceeded the verification limit for TOTP codes.",
  },
  totp_not_enrolled: {
    title: "TOTP Not Enrolled",
    message: "You have not enrolled in TOTP for multi-factor authentication.",
  },
  unauthenticated: {
    title: "Unauthenticated",
    message: "You must be logged in to access this resource.",
  },
  unexpected_provider_claim: {
    title: "Unexpected Provider Claim",
    message: "An unexpected OAuth provider claim was received.",
  },
  unverified_email: {
    title: "Unverified Email",
    message: "Please verify your email before proceeding.",
  },
  unsupported_flow_type: {
    title: "Unsupported Flow Type",
    message: "The type of flow requested is not supported.",
  },
  unsupported_response_type: {
    title: "Unsupported Response Type",
    message: "The OAuth response type is not supported by this provider.",
  },
  unsupported_token_type: {
    title: "Unsupported Token Type",
    message: "The token type provided is not supported.",
  },
  user_already_confirmed: {
    title: "User Already Confirmed",
    message: "This user is already confirmed.",
  },
  user_disabled: {
    title: "User Disabled",
    message: "This account has been disabled. Please contact support.",
  },
  user_not_found: {
    title: "User Not Found",
    message: "No user found with the provided credentials.",
  },
  weak_password: {
    title: "Weak Password",
    message:
      "Your password must be strong and should be at least 6 characters long.",
  },
};

export default authErrorCodes;
