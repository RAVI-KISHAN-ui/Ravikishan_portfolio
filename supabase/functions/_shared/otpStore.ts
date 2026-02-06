// Shared OTP storage between send-otp and verify-otp functions
// In serverless environment, each function instance has its own memory
// For production, consider using a database or Redis

export interface OtpData {
  otp: string;
  expiresAt: number;
  attempts: number;
}

export const otpStore = new Map<string, OtpData>();

export function cleanupExpiredOtps() {
  const now = Date.now();
  for (const [email, data] of otpStore.entries()) {
    if (data.expiresAt < now) {
      otpStore.delete(email);
    }
  }
}

export function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
