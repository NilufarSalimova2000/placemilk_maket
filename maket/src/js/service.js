const url = "http://localhost:3000";

export const getBanner = async () => {
    try {
        const res = await fetch(`${url}/banner`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error.message;
    }
};

export const getDiscountProducts = async () => {
    try {
        const res = await fetch(`${url}/discount_products`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error.message;
    }
};

export const getNewProducts = async () => {
    try {
        const res = await fetch(`${url}/new_products`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error.message;
    }
};

export const getRecProducts = async () => {
    try {
        const res = await fetch(`${url}/recomendet`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error.message;
    }
};