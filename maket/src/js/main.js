import { getBanner, getDiscountProducts, getNewProducts, getRecProducts } from "./service.js";

const hero_banner = document.querySelector(".banner");

const renderBanner = async () => {
    const data = await getBanner();
    hero_banner.innerHTML = data.map(
        (item)=> `<img src="${item.img}" alt="imag"/>`
    )
};

renderBanner();

const DisProducts_list = document.querySelector(".discount_products_list");

const renderDiscountProducts = async () => {
    const data = await getDiscountProducts();
    DisProducts_list.innerHTML = data.map(
        (item) => `<li class="w-[182px] rounded-[4px] shadow-lg shadow-black/12 px-[11px] py-[12px] bg-[#fff]">
        <img class="mb-[20px]" src="${item.img}" alt="imag">
        <div class="flex gap-[17px] items-center mb-[8px]">
            <p class="font-medium text-[14px] text-[#ff4343]">${item.price}</p>
            <p class="font-normal text-[10px] text-[#999999] line-through">${item.price2}</p>
        </div>
        <div class="w-[140px]">
            <p class="font-light text-[12px] text-[#000] leading-[124%]">${item.info}</p>
        </div>
    </li>`
    ).join("");
}

renderDiscountProducts();

const NewProduct_list = document.querySelector(".new_products_list");

const renderNewProducts = async () => {
    const data = await getNewProducts();
    NewProduct_list.innerHTML = data.map(
        (item) => `<li class="w-[182px] rounded-[4px] shadow-lg shadow-black/12 px-[11px] py-[12px] bg-[#fff]">
        <img class="mb-[20px]" src="${item.img}" alt="imag">
            <p class="font-medium text-[16px] text-[#000] mb-[8px]">${item.price}</p>
        <div class="w-[140px]">
            <p class="font-light text-[12px] text-[#000] leading-[124%]">${item.info}</p>
        </div>
    </li>`
    ).join("")
}

renderNewProducts();

const RecProduct_list = document.querySelector(".rec_products_list");

const renderRecProducts = async () => {
    const data = await getRecProducts();
    RecProduct_list.innerHTML = data.map(
        (item) => `<li class="w-[182px] rounded-[4px] shadow-lg shadow-black/12 px-[11px] py-[12px] bg-[#fff]">
        <img class="mb-[20px]" src="${item.img}" alt="imag">
            <p class="font-medium text-[16px] text-[#000] mb-[8px]">${item.price}</p>
        <div class="w-[140px]">
            <p class="font-light text-[12px] text-[#000] leading-[124%]">${item.info}</p>
        </div>
    </li>`
    ).join("")
}

renderRecProducts();