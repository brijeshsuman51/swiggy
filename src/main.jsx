import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import {store} from './stored/Stores.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)



// #include <vector>
// using namespace std;

// int missingNum(vector<int>& arr) {
//     int n = arr.size() + 1;

//     // Iterate from 1 to n and check
//     // if the current number is present
//     for (int i = 1; i <= n; i++) {
//         bool found = false;
//         for (int j = 0; j < n - 1; j++) {
//             if (arr[j] == i) {
//                 found = true;
//                 break;
//             }
//         }

//         // If the current number is not present
//         if (!found)
//             return i;
//     }
//     return -1;
// }

// int main() {
//     vector<int> arr = {8, 2, 4, 5, 3, 7, 1}; 
//     cout << missingNum(arr) << endl; 
//     return 0;
// }