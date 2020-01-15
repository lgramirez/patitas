import React from 'react';
import { storage, database } from '../utils/firebase';

const Form = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();

        const data = {
            'adopt': form.get('adopt'),
            'date': newDate,
            'description': form.get('description'),
            'gender': form.get('gender'),
            'name': form.get('name'),
            'photo': '',
            'profilePic': '',
            'type': form.get('type'),
            'userContact': '',
            'userName': ''
        }

        database.ref('pets').push(data)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const onChange = event => {
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name = (+new Date()) + '-' + file.name;
        const uploadFile = storageRef.child(name).put(file);

        uploadFile
            .then((snapshot) => {
                snapshot.ref.getDownloadURL()
                    .then(downloadURL => console.log(downloadURL));
            });
    }

    return (
    <div className="Form">
        <div className="Form-head">
            <h2>Dar en Adopción</h2>
        </div>
        <div className="Form-item">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre de tu mascota"/>
                <input type="text" name="description" placeholder="Describe tu mascota"/>
                <select name="type" id="type">
                    <option disabled selected>Seleccionar...</option>
                    <option value="cat">Gato</option>
                    <option value="dog">Perro</option>
                </select>
                <select name="gender" id="gender">
                    <option disabled selected>Seleccionar...</option>
                    <option value="female">Femenino</option>
                    <option value="male">Masculino</option>
                </select>
                <select name="adopt" id="gender">
                    <option disabled selected>Seleccionar...</option>
                    <option value="true">Dar en Adopción</option>
                    <option value="false">Cuidar</option>
                </select>
                <input type="file" onChange={onChange} name="photo"/>
                <button>Enviar</button>
            </form>
        </div>
    </div>
    );
}

export default Form;