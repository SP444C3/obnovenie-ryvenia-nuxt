import jwt from 'jsonwebtoken';

export default defineEventHandler( (event) => {
    const { password: userPassword } = getQuery(event);
    if (userPassword !== useRuntimeConfig().MANAGE_TOKEN) {
        return {error: 'Unauthorized, token invalid'}
    } else {
        const token = jwt.sign({ user: 'admin' }, useRuntimeConfig().AUTH_SECRET, { expiresIn: '1d' });
        return { token };
    }
})