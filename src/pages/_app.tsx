import { Provider } from "react-redux";
import "../styles/globals.scss";
import { wrapper } from "../store";

function MyApp({ Component, ...rest }) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
