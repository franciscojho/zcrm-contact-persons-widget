import './App.css'
import { useForm } from 'react-hook-form'
import useZohoWidget from '../src/hooks/useZohoWidget'

function App() {
  const data = useZohoWidget();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  //searchzbookscontacts

  console.log(data)

  function formFirstRow() {
    return (
      <div className="form-row">
        <div className="form-column">
          <div className="form-group">
            <label>Nombres:</label>
            <input type="text" {...register('firstName', { required: true })} />
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label>Apellidos:</label>
            <input type="text" {...register('lastName', { required: true } )} />
          </div>
        </div>
      </div>
    )
  }

  function formSecondRow() {
    return (
      <div className="form-row">
        <div className="form-column">
          <div className="form-group">
            <label>Correo:</label>
            <input type="email" {...register('correo', { required: true })} />
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label>Móvil Personal:</label>
            <input type="tel" {...register('phone', { required: true })} />
          </div>
        </div>
      </div>
    )
  }

  function formThirdRow() {
    return (
      <div className="form-row">
        <div className="form-column">
          <div className="form-group">
            <label >Móvil Laboral:</label>
            <input type="tel" {...register('workPhone')} />
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label>Canales de comunicación:</label>
            <div className="radio-group">
              <input defaultChecked type="radio" value="email" {...register('commsChannel')} />
              <label>Correo</label>

              <input type="radio" value="sms" {...register('commsChannel')} />
              <label>SMS</label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Crear persona de contacto en Zoho Books</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formFirstRow()}
          {formSecondRow()}
          {formThirdRow()}
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default App
