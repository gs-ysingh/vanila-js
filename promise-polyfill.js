function Promifill(executor) {
    if(typeof executor !== "function") {
        throw new TypeError('Promise resolver must be a function');
    }
    this.state = 'pending';
    this.value = undefined;

    executor();
}

