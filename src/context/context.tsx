import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  createContext,
  useState,
} from "react";

interface MyContextType {
  toggleCart: (product: string) => void;
  cartItems: string[];
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
  const [cartItems, setCartItems] = useState<string[]>([]);

  function toggleCart(productId: string) {
    const isProductInCart = cartItems.some(
      (cartItem) => cartItem === productId
    );
    if (!isProductInCart) {
      setCartItems((prevcart) => [...prevcart, productId]);
    } else {
      setCartItems(cartItems.filter((item) => item !== productId));
    }
    console.log(cartItems);
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        toggleCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
