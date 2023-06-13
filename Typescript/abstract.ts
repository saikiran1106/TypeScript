abstract class engine {
    abstract startengine() : void ;
}

class car extends engine {

    startengine(): void {
        console.log(' car has started with smoke & sound')
    }
}

class bike extends engine {
    startengine(): void {
        console.log('bike has started with high speed')
    }
}

const c1 = new car();
const b1 = new bike();

c1.startengine();
b1.startengine();

abstract class animal {
    abstract makesound() : void ;
}


class cat extends animal {

    makesound(): void {
        console.log('meow')
    }

}


class dog extends animal {
    makesound(): void {
        console.log('bark')
    }
}

const d1 = new cat();
const d2 = new dog();

d1.makesound();
d2.makesound();