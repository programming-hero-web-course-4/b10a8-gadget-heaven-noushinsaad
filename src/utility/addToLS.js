// import { toast } from "react-toastify";

// for add to mark as read list
const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        // return toast.error("already in the list");
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        // ideally trigger toast from a component
        // toast.success('Added successfully to the list');
    }
}

// const removeFromStoredReadList = (id) => {
//     const storedList = getStoredReadList();
//     storedList.pop(id);
//     const storedListStr = JSON.stringify(storedList);
//     localStorage.setItem('read-list', storedListStr);
// }


// for add to wishlist
const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        // return toast.error("already in the list");
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        // toast.success('Added successfully to the list');
    }
}

// const removeFromStoredWishList = (id) => {
//     const storedList = getStoredWishList();
//     storedList.pop(id);
//     const storedListStr = JSON.stringify(storedList);
//     localStorage.setItem('wish-list', storedListStr);
// }



export { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList }