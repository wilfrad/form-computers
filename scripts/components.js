const addDevice = 
    `<form id="container-from" class="card w-75 h-75 mt-4 position-absolute top-50 start-50 translate-middle" id="form-main">
        <div class="card-header">
            <span id="main-section-title">Add new device</span>
            <span id="sub-section" hidden>
                <img class="mx-1" src="/resource/icon/sub-section.svg" alt="...">
                <span id="sub-section-title">Laptop</span>
            </span>
        </div>
        <div class="row g-0 w-100 h-100">
            <div class="col-4 d-flex justify-content-center align-items-center p-2">
                <img src="resource/img/form-img-laptop.jpg" class="card-img w-100" alt="form-card-image">
            </div>
            <div class="col-8 p-2 d-flex flex-column justify-content-between">
                <div id="carouselExampleControlsNoTouching" class="carousel slide h-100 d-inline-flex flex-column justify-content-center" data-bs-ride="false">
                    <div id="container-forms" class="carousel-inner d-flex align-items-center p-2">
                        <div id="form-general" class="carousel-item active" >
                            <label for="select-device" class="form-label text-start" >Device format : (required)</label>
                            <select name="select-device" class="form-select" id="select-device">
                                <option value="" selected disabled hidden>Select a type</option>
                                <option value="laptop">Laptop</option>
                                <option value="desk">Desk</option>
                            </select><br>
                            <label for="brand-input" class="form-label text-start" >Brand : (required)</label>
                            <input type="text" class="form-control"  id="brand-input" name="brand-input" required><br>
                            <label for="storage-input" class="form-label text-start" >Memory storage : (required)</label>
                            <input type="number" class="form-control" id="storage-input" name="storage-input" placeholder="GB" required><br>
                        </div>
                        <div id="form-format" class="carousel-item"></div>
                        <div id="form-additional" class="carousel-item additional-quest">
                            <label for="img-input" class="form-label text-start" >Image : </label>
                            <input type="file" class="form-control" id="img-input" name="img-input" accept=".png,.jpg,.svg"><br>
                            <label for="description-input" class="form-label text-start" >Description :</label>
                            <textarea class="form-control size-f" id="description-input" name="description-input" rows="3" cols="30" placeholder="observations and comments"></textarea><br>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end mt-2">
                    <input type="button" class="btn btn-primary w-25 ms-2" id="send-form" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" disabled value="Next">
                </div>
            </div>
        </div>
    </form>
    <script async type="module" src="./scripts/formControl.js"></script>`;
const itemFormLaptop = 
    `<label for="size" class="form-label text-start">Size : </label>
    <input tabindex="5" type="text" class="form-control"  id="size" name="size" placeholder="12 x 22.5 x 1.2 cm"><br>
    <label for="changer" class="form-label text-start" >Changer : </label>
    <input tabindex="6" type="checkbox" class="form-check-label" id="changer" name="changer"><br>
    <label for="keyboard" class="form-label text-start" >keyboard : </label>
    <input tabindex="7" type="checkbox" class="form-check-label" id="keyboard" name="keyboard">`;
const itemFormDesktop = 
    `<label for="power-capacity" class="form-label text-start" >Power supply capacity : </label>
    <input tabindex="5" type="text" class="form-control"  id="power-capacity" name="power-capacity"><br>
    <label for="display" class="form-label text-start" >Display : </label>
    <input tabindex="6" type="checkbox" class="form-check-label" id="display" name="display">`;
const viewDataTable =
    `<div class="container-table card align-items-center mt-4 p-3" id="table-main">
        <div class="table-navbar d-flex align-self-end">
            <!--<div class="table-filter dropdown"></div>-->
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search">
                <button class="btn btn-outline-secondary disabled" type="submit">Search</button>
            </form>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Serial</th>
                    <th scope="col">Type</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-row--selected">
                    <th class="d-flex align-items-center">
                        <label for="table-row-item#" class="form-label m-0">1</label>
                        <input type="checkbox" class="btn btn-light ms-1" id="table-row-item#" value="num#">
                    </th>
                    <td>1542315</td>
                    <td>Laptop</td>
                    <td>Lenovo</td>
                    <td>Thinkpad 7</td>
                    </tr>
                    <tr class="table-info">
                    <th scope="row">Total devices</th>
                    <td colspan="4">
                        <p class="table-value text-end fw-bold">1</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="d-inline">
            <button type="button" class="btn btn-sm disabled" id="table-btn-prev">Prev</button>
            <button type="button" class="btn btn-outline-primary btn-sm active" id="table-btn-number" value="num#">1</button>
            <button type="button" class="btn btn-outline-primary btn-sm disabled" id="table-btn-number-skip">...</button>
            <button type="button" class="btn btn-sm disabled" id="table-btn-next">Next</button>
        </div>
    </div>
    <div class="card r-10 py-1 floating-menu" hidden>
        <h5 class="fm-title text-center mb-1">Element</h5>
        <img src="resource/img/form-img-laptop.jpg" class="card-img-top align-self-center w-75" alt="floating-menu-img">
        <div class="list-group-item d-flex justify-content-between align-items-center px-1">
            <p class="my-0 fw-7" id="fm-item-name">
                <img src="resource/icon/item-24x24.png" alt="floating-menu-img-item">
                    Item : 
            </p>
            <p class="my-0 fw-7" id="fm-item-value">value</p>
        </div>
    </div>`;
const tableRow =
    ``;
export { addDevice, itemFormLaptop, itemFormDesktop, viewDataTable, tableRow };