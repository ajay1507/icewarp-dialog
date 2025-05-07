import { useState } from 'react';
import Dialog from './components/Dialog/Dialog';
import Swal from 'sweetalert2';


const dialogVariants = [
  {
    name: "Full Dialog",
    config: {
      header: {
        icon: <i className="fas fa-exclamation-triangle" style={{ fontSize: '1.5rem', color: '#ffc107' }}></i>,
        title: "Subscription Expiry",
        buttons: [{
          label: "Help",
          onClick: () => Swal.fire({
            icon: 'info',
            title: 'Need help?',
            text: 'Visit our support page for subscription assistance.',
            confirmButtonText: 'Okay'
          })
        }]
      },
      content: (
        <p>
          Your subscription is about to expire. Renew now to avoid interruption in services
          and continue enjoying all premium features without any hassle.
        </p>
      ),
      footer: {
        info: "Renewing today ensures uninterrupted service.",
        buttons: [
          {
            label: "Remind Me Later",
            onClick: () => Swal.fire('We’ll remind you later.')
          },
          {
            label: "Renew Now",
            onClick: () => Swal.fire({
              title: 'Redirecting...',
              text: 'Taking you to the renewal page.',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            })
          }
        ]
      }
    }
  },
  {
    name: "Footer With No Button",
    config: {
      header: {
        icon: <i className="fas fa-file-alt" style={{ fontSize: '1.5rem', color: '#007bff' }}></i>,
        title: "Updated Terms of Service",
        buttons: [{
          label: "Help",
          onClick: () => Swal.fire({
            icon: 'info',
            title: 'Need help?',
            text: 'Contact legal support for more information.',
            confirmButtonText: 'Okay'
          })
        }]
      },
      content: (
        <p>
          We’ve updated our Terms of Service to reflect changes in data handling and transparency policies.
          Please review the new terms to continue using our platform.
        </p>
      ),
      footer: {
        info: "These changes will take effect from July 1, 2025."
      }
    }
  },
  {
    name: "Header With Multiple Buttons",
    config: {
      header: {
        icon: <i className="fas fa-trash-alt" style={{ color: 'red', fontSize: '1.5rem' }}></i>,
        title: "Delete File",
        buttons: [
          {
            label: "Help",
            onClick: () =>
              Swal.fire({
                icon: 'info',
                title: 'Need help?',
                text: 'Learn about file deletion in our help center.',
                confirmButtonText: 'Got it'
              })
          },
          {
            label: "Support",
            onClick: () =>
              Swal.fire({
                icon: 'question',
                title: 'Support',
                text: 'Redirecting to support...',
                timer: 1500,
                showConfirmButton: false
              })
          }
        ]
      },
      content: (
        <p>
          Are you sure you want to permanently delete this file? This action cannot be undone.
          Make sure you have a backup if needed.
        </p>
      ),
      footer: {
        info: "Once deleted, the file cannot be recovered.",
        buttons: [
          {
            label: "Cancel",
            onClick: () =>
              Swal.fire({
                icon: 'info',
                title: 'Cancelled',
                text: 'File deletion cancelled.',
                confirmButtonText: 'Okay'
              })
          },
          {
            label: "Delete Permanently",
            onClick: () =>
              Swal.fire({
                icon: 'warning',
                title: 'Deleted!',
                text: 'The file has been permanently deleted.',
                confirmButtonText: 'Close'
              })
          }
        ]
      }
    }
  }
];

function App() {
  const [dialog, setDialog] = useState(null);

  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#aaa'
      }}
    >
      <h2 style={{ marginBottom: 20 }}>IceWarp Dialog Variations</h2>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
        {dialogVariants.map((variant, idx) => (
          <button key={idx} onClick={() => setDialog(variant.config)}>
            {variant.name}
          </button>
        ))}
      </div>

      {dialog && (
        <Dialog
          {...dialog}
          onClose={() => setDialog(null)}
        />
      )}
    </div>
  );
}

export default App;
