import 'app/styles/index.scss';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { createRoot } from 'react-dom/client';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Не удалось вмонтировать приложение');
}
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
