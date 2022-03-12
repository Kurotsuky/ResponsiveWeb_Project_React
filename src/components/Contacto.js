export default function Contacto() {
    return (
        <>
            <div class="form-container">
                <form action="formulario.php" method="post" id="contactarForm">
                    <div class="form-field form-name">
                        <label for="name">Nombre:</label>
                        <input type="text" id="formName" name="name" required />
                    </div>

                    <div class="form-field form-email">
                        <label for="email">Email:</label>
                        <input type="text" id="formEmail" name="email" required />
                    </div>

                    <div class="form-field form-topic">
                        <label for="topic">Asunto:</label>
                        <input type="text" id="formTopic" name="topic" required />
                    </div>

                    <div class="form-areafield form-message">
                        <label for="message">Mensaje:</label>
                        <textarea id="formMessage" name="message" rows="10" required></textarea>
                    </div>

                    <div class="form-submit">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    );
}