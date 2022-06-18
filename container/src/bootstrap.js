import { mount as productsMount } from "productsApp/productsInfo";
import { mount as cartMount } from "cartApp/cartInfo";

productsMount(document.querySelector(".product-list"));
cartMount(document.querySelector(".cart-list"));
