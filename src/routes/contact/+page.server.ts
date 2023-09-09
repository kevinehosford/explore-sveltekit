export const actions = {
    default: async ({ locals, request }) => {
        const data = await request.formData();
        
        const email = data.get('email');
        const name = data.get('name');
        const message = data.get('message');

        console.log(name, email, message);

        return {
            message: 'Email sent!'
        }
    }
}