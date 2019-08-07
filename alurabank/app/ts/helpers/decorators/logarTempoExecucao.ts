export function logarTempoExecucao() {

    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor) {
        // é o metodo que sera posicionado
        const metodoOriginal = descriptor.value

        descriptor.value = function (...args: any[]) {
            return metodoOriginal.apply(this, args);
        }
        return descriptor;
    }
}