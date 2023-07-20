/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola!, Te puedo dar tips sobre: Desechos, Compras, Electronica, Moda o sobre Transporte, ¿sobre que quieres que te hable?.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DesechosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DesechosIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En nuestra rápida y  creciente sociedad, todo lo que consumimos tiene fecha de caducidad. Las cosas duran poco o mejor dicho, queremos cambiarlas rápido como la moda. Tu manera de gastar dinero puede afectar al medio ambiente. Compra cosas de calidad. Aunque en ocasiones, esto puede ser un poco más caro, a la larga estás ayudando al planeta asegurándote de que no están dañando el medio ambiente. Tambien te puedo dar tips sobre: Compras, Electronica, Moda o sobre Transporte, ¿sobre que quieres que te hable? o di cancela para terminar';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ComprasIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComprasIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Apoya al comercio sustentable, puede ser hasta más barato. Consume en las tiendas locales en donde tu puedas llevar tus propios recipientes para surtirte de los alimentos que necesitas. Si vas al mercado o al super, lleva tus propias bolsas. Imagínate si puedes ahorrarte cada microbolsita en donde metes fruta por fruta o el exceso de bolsas que te dan para transportar tus alimentos. Eso hace mucha diferencia a largo plazo. Tambien te puedo dar tips sobre: Desechos, Electronica, Moda o sobre Transporte, ¿sobre que quieres que te hable? o di cancela para terminar';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ElectronicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ElectronicaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Este tipo de contaminante es de los peores y lamentablemente de los más comunes. México genera 35,000 toneladas de basura electrónica y sólo se recicla cerca del 10%. Tenemos todos claro que los gadgests pasan de moda muy rápido, el mercado no van a dejar de actualizarse en avances tecnológicos pero nosotros sí podemos hacer un esfuerzo por cuidar mejor nuestros aparatos electrónicos, no dejarnos llevar por la moda de consumo excesivo y conservarlos en mejor estado por más tiempo. Existen muchas segundas vidas y hasta terceras para tus gadgets: si se rompió, repáralo y si ya no lo quieres, puedes donarlo a comunidades de bajos recursos que sí lo necesitan. En México hay varios lugares donde puedes llevar toda su basura electrónica para reciclarla. En la Ciudad de México realizan una vez al mes un “reciclatrón”. Tambien te puedo dar tips sobre: Desechos, Compras, Moda o sobre Transporte, ¿sobre que quieres que te hable? o di cancela para terminar';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ModaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ModaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'La mayoría de nuestras prendas son de la terrible llamada fast fashion. Eso significa que cambia casi cada mes la tendencia. Está bien consumir lo que te gusta pero podríamos intentar hacer que nuestra moda personal dure un poco  más, como bien se dice: de la moda lo que te acomoda y a nosotros nos acomoda preservar el medio ambiente. Los textiles contaminan en su producción: los colorantes y la manufactura es terrible para el medio ambiente. Pero también contaminan en su vida útil: cada vez que lavamos la ropa, utilizamos jabones que dañan el agua y con eso, el ecosistema. Podemos darle muchas vidas a cada prenda. Si para ti ya pasó de moda, dónala, hay muchísima gente que se viste de lo que alguien más le dona en buena calidad. Cuida tus prendas. Si no está sucia no la laves, puedes usarla una segunda vez y en veces, una tercera. Si puedes, investiga qué jabones afectan menos al medio ambiente y que empresas productoras de jabones son socialmente responsables, consume y colabora con su proyecto. Tambien te puedo dar tips sobre: Desechos, Compras, Electronica o sobre Transporte, ¿sobre que quieres que te hable? o di cancela para terminar';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const TransporteIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TransporteIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Mexico no es un país muy vanguardista en temas de transporte, lo vivimos todos los ciudadanos, todos los días de nuestras vidas. No te vayas solo al trabajo, a entrenar, de fiesta, a la casa de tus papás, busca hacer ronda, ofrecer rite, organizarte con las personas que van al mismo destino y pagar los gastos del coche entre todos. Ahora, si todos usaramos un poco más de transporte público, demandaríamos juntos la mejora de éste. Tendríamos conciencia del problema de falta de rutas, de camiones, metro, líneas, trolebuses y de la corrupción en el sistema y exigiriamos el ajuste. Necesitamos una ciudad libre de contaminación para poder seguir entrenando para nuestras carreras en la calle. Tambien te puedo dar tips sobre: Desechos, Compras, Electronica o sobre Moda, ¿sobre que quieres que te hable? o di cancela para terminar';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = '¡Puedes saludarme! ¿Cómo puedo ayudar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adios!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no sé nada de eso. Inténtalo de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Acabas de activar ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        DesechosIntentHandler,
        ComprasIntentHandler,
        ElectronicaIntentHandler,
        ModaIntentHandler,
        TransporteIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();