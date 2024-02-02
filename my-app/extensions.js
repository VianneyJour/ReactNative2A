export function loadExtension() {
    if(!Array.prototype.displayDescription) {
        Array.prototype.displayDescription = function () {
            return this.map((item) => item.description() + "\n")
        }
    }
}