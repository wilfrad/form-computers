class Computer {
    Serial = null;
    Brand = null;
    MemoryStorage = null;
    Description = null;
    Image = null;

    constructor (Brand, MemoryStorage, Description = null, Image = null) {
        this.Brand = Brand;
        this.MemoryStorage = MemoryStorage;
        this.Description = Description;
        this.Image = Image;
    }
}

class Laptop {
    Size =  null;
    Changer = null;
    Keyboard = null;

    constructor (Size, Changer, Keyboard) {
        this.Size = Size;
        this.Changer = Changer;
        this.Keyboard = Keyboard;
    }
}

class Desk {
    PowerCapacity = null;
    Display = null;

    constructor (PowerCapacity, Display) {
        this.PowerCapacity = PowerCapacity;
        this.Display = Display;
    }
}

export default this;