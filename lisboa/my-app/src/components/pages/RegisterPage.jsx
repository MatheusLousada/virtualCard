import {Form} from '../forms/Form';
import {QRCodeRetangle} from '../others/QRCodeRetangle';

export function RegisterPage() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="m-auto w-full max-w-md">
        <Form />
      </div>
      <div className="m-auto w-full max-w-md hidden" id='externalDivQRCode'>
        <QRCodeRetangle />
      </div>
    </div>
  );
}

export default RegisterPage;