const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const session = require('express-session');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs').promises;
require('dotenv').config();
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_KEY);


require('dotenv').config();


console.log("-------------------")
console.log('lv9dreams database is on');

// Main constants
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
        allowedHeaders: ['Content-Type']
    }
});







// Session middleware
const tmin = 60000; // 1 min
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET || 'fallback-secret-change-in-production',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * tmin,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production' 
    }
});

// Middlewares
app.use(cors());
app.use(express.static(path.join(__dirname)));app.use(sessionMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
io.engine.use(sessionMiddleware);



// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    try {
        // Validation basique
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Champs requis manquants' });
        }
        
        // Envoi de l'email
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>', // Ou ton domaine vérifié
            to: 'ademjami75@gmail.com',
            subject: subject || `Nouveau message de ${name}`,
            html: `
                <h2>Nouveau message depuis le portfolio</h2>
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Sujet:</strong> ${subject || 'Non spécifié'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
            reply_to: email
        });
        
        console.log('Email envoyé:', data);
        res.status(200).json({ success: true, message: 'Email envoyé' });
        
    } catch (error) {
        console.error('Erreur envoi email:', error);
        res.status(500).json({ error: 'Erreur lors de l\'envoi' });
    }
});



// Socket.IO
io.on('connection', (socket) => {
    console.log("connexion acceptée :", socket.id);
    console.log("-------------------");

    
    socket.on('disconnect', () => {
        console.log("déconnexion acceptée :", socket.id);
        console.log("-------------------");
        
    });
});
































// Démarrage du serveur
const PORT = process.env.PORT || 7000;
server.listen(PORT, function(err) {
    if (err) throw err;
    console.log("-------------------");
    console.log("server on port", PORT)
    console.log("-------------------");
});
