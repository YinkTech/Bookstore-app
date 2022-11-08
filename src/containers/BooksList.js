
import { Provider } from "react-redux";
const store = createStore(routerReducer)

ReactDOM.render (
  <Provider store={store}>
        <>
          <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
            </tr>
          </table>
        </>
  </Provider>
);

export default Bookslist;