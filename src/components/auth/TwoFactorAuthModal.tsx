'use client';

import { useState, useRef } from 'react';
import { Lock } from 'lucide-react';

interface TwoFactorAuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onVerify: (otp: string) => void;
}

export function TwoFactorAuthModal({ isOpen, onClose, onVerify }: TwoFactorAuthModalProps) {
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    // Fix: correct ref type for input elements
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            // Auto-focus next input
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };


    const isOtpComplete = otp.every(digit => digit !== '');



    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-100">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-4">
                        <Lock className="w-10 h-10 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Verify Your Identity
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Please enter the 6-digit verification code.
                    </p>
                </div>

                {/* OTP Inputs */}
                <div className="flex gap-3 justify-center mb-8">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputRefs.current[index] = el }}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => {
                                const val = e.target.value.replace(/[^0-9]/g, '');
                                handleChange(index, val);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Backspace' && !digit && index > 0) {
                                    inputRefs.current[index - 1]?.focus();
                                }
                            }}
                            className="w-11 h-14 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                        />
                    ))}
                </div>

                <button
                    onClick={() => {
                        console.log('Verify button clicked, OTP:', otp.join(''));
                        if (isOtpComplete) {
                            onVerify(otp.join(''));
                        }
                    }}
                    disabled={!isOtpComplete}
                    className={`w-full py-3 rounded-xl font-bold text-lg transition-all transform active:scale-95 ${isOtpComplete
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:brightness-110 cursor-pointer'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Verify & Continue
                </button>

                <button
                    onClick={onClose}
                    className="w-full mt-4 text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
