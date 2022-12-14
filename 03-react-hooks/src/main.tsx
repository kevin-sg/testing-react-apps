import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// import { HooksApp } from '@/HooksApp';
// import { CounterApp } from '@/01-useState/CounterApp';
// import { CounterWithCustomHook } from '@/01-useState/CounterWithCustomHook';
// import { SimpleForm } from '@/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from '@/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from '@/03-examples/MultipleCustomHooks';
// import { FocusScreen } from '@/04-useRef/FocusScreen';
// import { Layout } from '@/05-useLayoutEffect/Layout';
// import { Memorize } from '@/06-memos/Memorize';
// import { MemoHook } from '@/06-memos/MemoHook';
// import { CallbackHook } from '@/06-memos';
import { Father } from "@/07-tarea-memo";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Father />
    </BrowserRouter>
  </React.StrictMode>,
);
