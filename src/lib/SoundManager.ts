export class SoundManager {
    private static audioContext: AudioContext | null = null;

    private static getContext(): AudioContext | null {
        if (typeof window === 'undefined') return null;
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return this.audioContext;
    }

    private static playTone(frequency: number, type: OscillatorType, duration: number) {
        const ctx = this.getContext();
        if (!ctx) return;

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.type = type;
        oscillator.frequency.value = frequency;

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start();

        // Fade out to avoid clicking sound
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + duration);

        oscillator.stop(ctx.currentTime + duration);
    }

    static playSuccess() {
        this.playTone(600, 'sine', 0.1);
        setTimeout(() => this.playTone(800, 'sine', 0.2), 100);
    }

    static playError() {
        this.playTone(150, 'sawtooth', 0.2);
        setTimeout(() => this.playTone(100, 'sawtooth', 0.2), 200);
    }

    static playNotification() {
        // Gentle "ding"
        this.playTone(500, 'sine', 0.3);
    }
}
