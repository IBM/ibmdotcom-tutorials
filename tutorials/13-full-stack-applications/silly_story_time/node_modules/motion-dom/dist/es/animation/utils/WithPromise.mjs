class WithPromise {
    constructor() {
        this.count = 0;
        this.updateFinished();
    }
    get finished() {
        return this._finished;
    }
    updateFinished() {
        this.count++;
        this._finished = new Promise((resolve) => {
            this.resolve = resolve;
        });
    }
    notifyFinished() {
        this.resolve();
    }
    /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */
    then(onResolve, onReject) {
        return this.finished.then(onResolve, onReject);
    }
}

export { WithPromise };
