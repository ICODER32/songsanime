import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'd-id/1.1.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * Create a talk
     *
     * @throws FetchError<400, types.CreateTalkResponse400>
     * @throws FetchError<401, types.CreateTalkResponse401> AuthorizationError
     * @throws FetchError<402, types.CreateTalkResponse402> InsufficientCreditsError
     * @throws FetchError<403, types.CreateTalkResponse403> PermissionError
     * @throws FetchError<451, types.CreateTalkResponse451> ImageModerationError | CelebrityRecognizedError | TextModerationError |
     * AudioModerationError
     */
    createTalk(body, metadata) {
        return this.core.fetch('/talks', 'post', body, metadata);
    }
    /**
     * Get talks
     *
     * @throws FetchError<401, types.GetTalksResponse401> AuthorizationError
     */
    getTalks(metadata) {
        return this.core.fetch('/talks', 'get', metadata);
    }
    /**
     * Get a specific talk
     *
     * @throws FetchError<401, types.GetTalkResponse401> AuthorizationError
     * @throws FetchError<404, types.GetTalkResponse404> NotFoundError
     */
    getTalk(metadata) {
        return this.core.fetch('/talks/{id}', 'get', metadata);
    }
    /**
     * Delete a specific talk
     *
     * @throws FetchError<401, types.DeleteTalkResponse401> AuthorizationError
     * @throws FetchError<404, types.DeleteTalkResponse404> NotFoundError
     * @throws FetchError<409, types.DeleteTalkResponse409> NotReadyError
     */
    deleteTalk(metadata) {
        return this.core.fetch('/talks/{id}', 'delete', metadata);
    }
    /**
     * Initiates the creation of a new WebRTC connection to a browser peer. The endpoint
     * returns the necessary information to set up and manage the connection.
     *
     * @summary Create a new stream
     * @throws FetchError<401, types.CreateStreamResponse401> AuthorizationError
     */
    createStream(body, metadata) {
        return this.core.fetch('/talks/streams', 'post', body, metadata);
    }
    /**
     * Updates the server with the SDP answer to the SDP offer received from the initial call
     * to the `/streams` endpoint, during the offer/answer negotiation of a WebRTC connection.
     *
     * @summary Start a stream
     * @throws FetchError<400, types.StartConnectionResponse400> SessionError
     * @throws FetchError<401, types.StartConnectionResponse401> AuthorizationError
     */
    startConnection(body, metadata) {
        return this.core.fetch('/talks/streams/{id}/sdp', 'post', body, metadata);
    }
    /**
     * Updates the server with a WebRTC ICE candidate. If the candidate parameter is missing or
     * a value of null is given the added ICE candidate is an "end-of-candidates" indicator.
     *
     * @summary Submit network information
     * @throws FetchError<400, types.AddIceCandidateResponse400> SessionError
     * @throws FetchError<401, types.AddIceCandidateResponse401> AuthorizationError
     */
    addIceCandidate(body, metadata) {
        return this.core.fetch('/talks/streams/{id}/ice', 'post', body, metadata);
    }
    /**
     * Create a talk stream
     *
     * @throws FetchError<400, types.CreateTalkStreamResponse400> SessionError
     * @throws FetchError<401, types.CreateTalkStreamResponse401> AuthorizationError
     */
    createTalkStream(body, metadata) {
        return this.core.fetch('/talks/streams/{id}', 'post', body, metadata);
    }
    /**
     * Delete a talk stream
     *
     * @throws FetchError<400, types.DeleteStreamResponse400> SessionError
     * @throws FetchError<401, types.DeleteStreamResponse401> AuthorizationError
     * @throws FetchError<404, types.DeleteStreamResponse404> NotFound
     */
    deleteStream(body, metadata) {
        return this.core.fetch('/talks/streams/{id}', 'delete', body, metadata);
    }
    /**
     * Get a list of the presenters
     *
     */
    getPresenters(metadata) {
        return this.core.fetch('/clips/presenters', 'get', metadata);
    }
    /**
     * Get presenter by id
     *
     */
    getPresenterById(metadata) {
        return this.core.fetch('/clips/presenters/{id}', 'get', metadata);
    }
    /**
     * Create a clip
     *
     * @throws FetchError<400, types.CreateClipResponse400>
     * @throws FetchError<401, types.CreateClipResponse401> AuthorizationError
     * @throws FetchError<402, types.CreateClipResponse402> InsufficientCreditsError
     * @throws FetchError<403, types.CreateClipResponse403> PermissionError
     * @throws FetchError<451, types.CreateClipResponse451> ImageModerationError | CelebrityRecognizedError | TextModerationError |
     * AudioModerationError
     */
    createClip(body, metadata) {
        return this.core.fetch('/clips', 'post', body, metadata);
    }
    /**
     * Get clips
     *
     * @throws FetchError<401, types.GetClipsResponse401> AuthorizationError
     */
    getClips(metadata) {
        return this.core.fetch('/clips', 'get', metadata);
    }
    /**
     * Get a specific clip
     *
     * @throws FetchError<401, types.GetClipResponse401> AuthorizationError
     * @throws FetchError<404, types.GetClipResponse404> NotFoundError
     */
    getClip(metadata) {
        return this.core.fetch('/clips/{id}', 'get', metadata);
    }
    /**
     * Delete a specific clip
     *
     * @throws FetchError<401, types.DeleteClipResponse401> AuthorizationError
     * @throws FetchError<404, types.DeleteClipResponse404> NotFoundError
     * @throws FetchError<409, types.DeleteClipResponse409> NotReadyError
     */
    deleteClip(metadata) {
        return this.core.fetch('/clips/{id}', 'delete', metadata);
    }
    /**
     * Initiates the creation of a new WebRTC connection to a browser peer. The endpoint
     * returns the necessary information to set up and manage the connection.
     *
     * @summary Create a new stream
     * @throws FetchError<400, types.CreateStream1Response400> DriverNotValidError
     * @throws FetchError<401, types.CreateStream1Response401> AuthorizationError
     */
    createStream1(body, metadata) {
        return this.core.fetch('/clips/streams', 'post', body, metadata);
    }
    /**
     * Updates the server with the SDP answer to the SDP offer received from the initial call
     * to the `/streams` endpoint, during the offer/answer negotiation of a WebRTC connection.
     *
     * @summary Start a stream
     * @throws FetchError<400, types.StartConnection1Response400> SessionError
     * @throws FetchError<401, types.StartConnection1Response401> AuthorizationError
     */
    startConnection1(body, metadata) {
        return this.core.fetch('/clips/streams/{id}/sdp', 'post', body, metadata);
    }
    /**
     * Updates the server with a WebRTC ICE candidate. If the candidate parameter is missing or
     * a value of null is given the added ICE candidate is an "end-of-candidates" indicator.
     *
     * @summary Submit network information
     * @throws FetchError<400, types.AddIceCandidate1Response400> SessionError
     * @throws FetchError<401, types.AddIceCandidate1Response401> AuthorizationError
     */
    addIceCandidate1(body, metadata) {
        return this.core.fetch('/clips/streams/{id}/ice', 'post', body, metadata);
    }
    /**
     * Create a clip stream
     *
     * @throws FetchError<400, types.CreateClipStreamResponse400> SessionError
     * @throws FetchError<401, types.CreateClipStreamResponse401> AuthorizationError
     */
    createClipStream(body, metadata) {
        return this.core.fetch('/clips/streams/{id}', 'post', body, metadata);
    }
    /**
     * Delete a clip stream
     *
     * @throws FetchError<400, types.DeleteStream1Response400> SessionError
     * @throws FetchError<401, types.DeleteStream1Response401> AuthorizationError
     * @throws FetchError<404, types.DeleteStream1Response404> NotFound
     */
    deleteStream1(body, metadata) {
        return this.core.fetch('/clips/streams/{id}', 'delete', body, metadata);
    }
    /**
     * Get presenter drivers by id
     *
     */
    getPresenterDriversById(metadata) {
        return this.core.fetch('/clips/presenters/{id}/drivers', 'get', metadata);
    }
    /**
     * Create an animation
     *
     * @throws FetchError<400, types.CreateAnimationResponse400> BadRequestError | InvalidFileSizeError | InvalidImageResolutionError | ConfigError |
     * InvalidFaceError
     * @throws FetchError<401, types.CreateAnimationResponse401> AuthorizationError
     * @throws FetchError<402, types.CreateAnimationResponse402> InsufficientCreditsError
     * @throws FetchError<403, types.CreateAnimationResponse403> PermissionError
     */
    createAnimation(body) {
        return this.core.fetch('/animations', 'post', body);
    }
    /**
     * Get animations
     *
     * @throws FetchError<401, types.GetAnimationsResponse401> AuthorizationError
     */
    getAnimations(metadata) {
        return this.core.fetch('/animations', 'get', metadata);
    }
    /**
     * Create an animation task
     *
     * @throws FetchError<400, types.CreateTaskResponse400> BadRequestError | InvalidFileSizeError | InvalidImageResolutionError | ConfigError |
     * InvalidFaceError
     * @throws FetchError<401, types.CreateTaskResponse401> AuthorizationError
     * @throws FetchError<402, types.CreateTaskResponse402> InsufficientCreditsError
     * @throws FetchError<403, types.CreateTaskResponse403> PermissionError
     */
    createTask(body) {
        return this.core.fetch('/animations/tasks', 'post', body);
    }
    /**
     * Get a specific animation
     *
     * @throws FetchError<401, types.GetAnimationResponse401> AuthorizationError
     * @throws FetchError<404, types.GetAnimationResponse404> NotFoundError
     */
    getAnimation(metadata) {
        return this.core.fetch('/animations/{id}', 'get', metadata);
    }
    /**
     * Delete a specific animation
     *
     * @throws FetchError<401, types.DeleteAnimationResponse401> AuthorizationError
     * @throws FetchError<404, types.DeleteAnimationResponse404> NotFoundError
     * @throws FetchError<409, types.DeleteAnimationResponse409> NotReadyError
     */
    deleteAnimation(metadata) {
        return this.core.fetch('/animations/{id}', 'delete', metadata);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
