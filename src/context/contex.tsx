import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  createContext,
  useState,
} from "react";
import { singleProductType } from "../pages/ProductPage";

interface MyContextType {
  addToCart: (product: singleProductType) => void;
  cartItems: singleProductType[];
  setCartItems: React.Dispatch<React.SetStateAction<singleProductType[]>>;
}
const Context = createContext<MyContextType | undefined>(undefined);

function ContextProvider(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  //   const [allPhotos, setAllphotos] = React.useState([]);
  const [cartItems, setCartItems] = useState<singleProductType[]>([]);

  //   const url =
  //     "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  //   //get and save the data to state
  //   React.useEffect(() => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => setAllphotos(data));
  //   }, []);

  function addToCart(product: singleProductType) {
    setCartItems((prevItem) => [...prevItem, product]);
  }

  //remove cart Item by pictureId
  //creates a new array filled with carts that has id not equals
  function removeCartItem(productId: number) {
    const leftCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(leftCart);
  }

  //   function emptyCart() {
  //     setCartItems([]);
  //   }

  //   function toggleIsfavorite(pictureId) {
  //     const updatedArr = allPhotos.map((prevPhoto) => {
  //       if (prevPhoto.id === pictureId) {
  //         return { ...prevPhoto, isFavorite: !prevPhoto.isFavorite };
  //       }
  //       return prevPhoto;
  //     });

  //     setAllphotos(updatedArr);
  //   }

  return (
    <Context.Provider
      value={{
        cartItems,
        addToCart,
        setCartItems,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
