const itemFormLaptop = 
    '<div id="form-laptop" class="carousel-item laptop-quest">' +
        '<label for="size" class="form-label text-start">Size : </label>' +
        '<input type="text" class="form-control"  id="size" name="size" placeholder="12 x 22.5 x 1.2 cm"><br>' +
        '<label for="changer" class="form-label text-start" >Changer : </label>' +
        '<input type="checkbox" class="form-check-label" id="changer" name="changer"><br>' +
        '<label for="keyboard" class="form-label text-start" >keyboard : </label>' +
        '<input type="checkbox" class="form-check-label" id="keyboard" name="keyboard"><br>' +
    '</div>';
const itemFormDesktop = 
    '<div id="form-desk" class="carousel-item desk-quest" >' +
        '<label for="power-capacity" class="form-label text-start" >Power supply capacity : </label>' +
        '<input type="text" class="form-control"  id="power-capacity" name="power-capacity"><br>' +
        '<label for="display" class="form-label text-start" >Display : </label>' +
        '<input type="checkbox" class="form-check-label" id="display" name="display"><br>' +
    '</div>';
const itemFormAdditional = 
    '<div id="form-additional" class="carousel-item additional-quest">' +
        '<label for="img-input" class="form-label text-start" >Image : </label>' +
        '<input type="file" class="form-control" id="img-input" name="img-input" accept=".png,.jpg,.svg"><br>' +
        '<label for="description-input" class="form-label text-start" >Description :</label>' +
        '<textarea class="form-control size-f" id="description-input" name="description-input" rows="3" cols="30" placeholder="observations and comments"></textarea><br>' +
    '</div>';

export { itemFormLaptop, itemFormDesktop, itemFormAdditional };