class computer {
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

class laptop {
    Size =  null;
    Changer = null;
    Keyboard = null;

    constructor (Size, Changer, Keyboard) {
        this.Size = Size;
        this.Changer = Changer;
        this.Keyboard = Keyboard;
    }
}

class desk {
    PowerCapacity = null;
    Display = null;

    constructor (PowerCapacity, Display) {
        this.PowerCapacity = PowerCapacity;
        this.Display = Display;
    }
}

export default this;