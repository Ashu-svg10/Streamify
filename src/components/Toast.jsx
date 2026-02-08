import { useToast } from '../context/ToastContext';
import '../styles/Toast.css';

const Toast = () => {
    const { toasts, removeToast } = useToast();

    return (
        <div className="toast-container">
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    className={`toast toast-${toast.type}`}
                    onClick={() => removeToast(toast.id)}
                >
                    <div className="toast-content">
                        {toast.type === 'success' && <i className="fas fa-check-circle"></i>}
                        {toast.type === 'error' && <i className="fas fa-exclamation-circle"></i>}
                        {toast.type === 'info' && <i className="fas fa-info-circle"></i>}
                        <span>{toast.message}</span>
                    </div>
                    <button className="toast-close" onClick={() => removeToast(toast.id)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Toast;
