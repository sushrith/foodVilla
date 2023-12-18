import { render } from '@testing-library/react';
import Header from '../Header';
import Title from '../Title';
import { Provider } from 'react-redux';
import store from '../../utils/store'
import {StaticRouter} from 'react-router-dom/server' //this can work without dom

test("Logo should load on rendering header",()=>{
    // load Header //No root for jsdom //render will create small container which loads header inside it
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            {/* <Title> */}
            <Header/>
            {/* </Title> */}
        </Provider>
    </StaticRouter>
        );
    
    //Check if logo is loaded
        const logo = header.getAllByTestId("logo");
        expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
});