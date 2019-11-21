export default abstract class Reservoir<T extends number> {

    protected currentLoad: T;
    protected maxCapacity: T;

    constructor(currentLoad: T, maxCapacity: T) {
        this.currentLoad = currentLoad;
        this.maxCapacity = maxCapacity;
    }

    public fill(newMaterial: T) {
        const newTotal = newMaterial + this.currentLoad;
        if (newMaterial > this.maxCapacity || newTotal > this.maxCapacity) {
            throw new Error("Max grounds overflow! Please clean mess!");
        }
        this.currentLoad = newTotal as T;
    }

    public isEmpty(): boolean {
        return this.currentLoad === 0;
    }

    public take(materialWanted: T): number {
        if (this.currentLoad === 0) {
            throw new Error("No more material to take!");
        }
        if (this.currentLoad < materialWanted) {
            const returned = this.currentLoad;
            this.currentLoad = 0 as T;
            return returned;
        }
        this.currentLoad = (this.currentLoad - materialWanted) as T;
        return materialWanted;
    }

    public getCurrentLoad(): T {
        return (Math.round(this.currentLoad * 100) / 100) as T;
    }

    public getMaxCapacity(): T {
        return this.maxCapacity;
    }

    public abstract toString(): string;
}
