declare const AddIceCandidate: {
    readonly body: {
        readonly anyOf: readonly [{
            readonly required: readonly ["candidate", "sdpMid", "sdpMLineIndex"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly candidate: {
                    readonly type: "string";
                    readonly description: "A string representing the transport address for the candidate that can be used for connectivity checks.\nThe format of this address is a candidate-attribute as defined in RFC 5245. This string is empty (\"\") if the\nRTCIceCandidate is an \"end of candidates\" indicator.";
                };
                readonly sdpMid: {
                    readonly type: "string";
                    readonly description: "A string specifying the candidate's media stream identification tag which uniquely identifies the media stream\nwithin the component with which the candidate is associated, or null if no such association exists.";
                };
                readonly sdpMLineIndex: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly description: "If not null, sdpMLineIndex indicates the zero-based index number of the media description (as defined in RFC\n4566) in the SDP with which the candidate is associated.";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly session_id: {
                    readonly type: "string";
                    readonly description: "Session identifier information, should be returned in the body of all streaming requests (from the response\nof the POST /streams)";
                };
            };
        }, {
            readonly type: "object";
            readonly properties: {
                readonly session_id: {
                    readonly type: "string";
                    readonly description: "Session identifier information, should be returned in the body of all streaming requests (from the response\nof the POST /streams)";
                };
            };
        }];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the stream identifier";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly cookie: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["status"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AddIceCandidate1: {
    readonly body: {
        readonly anyOf: readonly [{
            readonly required: readonly ["candidate", "sdpMid", "sdpMLineIndex"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly candidate: {
                    readonly type: "string";
                    readonly description: "A string representing the transport address for the candidate that can be used for connectivity checks.\nThe format of this address is a candidate-attribute as defined in RFC 5245. This string is empty (\"\") if the\nRTCIceCandidate is an \"end of candidates\" indicator.";
                };
                readonly sdpMid: {
                    readonly type: "string";
                    readonly description: "A string specifying the candidate's media stream identification tag which uniquely identifies the media stream\nwithin the component with which the candidate is associated, or null if no such association exists.";
                };
                readonly sdpMLineIndex: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly description: "If not null, sdpMLineIndex indicates the zero-based index number of the media description (as defined in RFC\n4566) in the SDP with which the candidate is associated.";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly session_id: {
                    readonly type: "string";
                    readonly description: "Session identifier information, should be returned in the body of all streaming requests (from the response\nof the POST /streams)";
                };
            };
        }, {
            readonly type: "object";
            readonly properties: {
                readonly session_id: {
                    readonly type: "string";
                    readonly description: "Session identifier information, should be returned in the body of all streaming requests (from the response\nof the POST /streams)";
                };
            };
        }];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the stream identifier";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["status"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateAnimation: {
    readonly body: {
        readonly properties: {
            readonly source_url: {
                readonly description: "The URL of the source image to be animated by the driver video. Image type of jpg|jpeg|tiff|png|bmp";
                readonly type: "string";
                readonly pattern: "(https|s3):.*\\.(?:jpg|jpeg|tiff|png|bmp|JPG|JPEG|TIFF|PNG|BMP)";
                readonly examples: readonly ["https://path.to/image.jpg"];
            };
            readonly driver_url: {
                readonly description: "The URL of the driver video to drive the animation, if not provided a driver video will be selected for you from the predefined DriversBank";
                readonly type: "string";
                readonly pattern: "(https|s3|bank):\\/\\/.+";
                readonly examples: readonly ["bank://nostalgia/"];
            };
            readonly result_url: {
                readonly description: "The URL of the animation video, if not provided use default destination\nSupports S3 Signed URLs";
                readonly type: "string";
                readonly pattern: "(https|s3):\\/\\/.+";
                readonly examples: readonly ["https://path.to.directory/movie.mp4"];
            };
            readonly face: {
                readonly description: "the face to animate - otherwise detects the dominant face";
                readonly properties: {
                    readonly size: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly description: "Size of the square side";
                        readonly minimum: 0;
                        readonly examples: readonly [512];
                        readonly maximum: 2147483647;
                    };
                    readonly top_left: {
                        readonly items: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly type: "array";
                        readonly description: "Top left location of the face in the frame - can be negative";
                        readonly minItems: 2;
                        readonly maxItems: 2;
                    };
                    readonly overlap: {
                        readonly enum: readonly ["NO", "PARTIAL", "YES", "UNKNOWN"];
                        readonly type: "string";
                    };
                    readonly face_id: {
                        readonly type: "string";
                    };
                    readonly detect_confidence: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly sharpness: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly face_occluded: {
                        readonly type: "boolean";
                    };
                    readonly face_occluded_confidence: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly detection: {
                        readonly properties: {
                            readonly top: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly left: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly bottom: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly right: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly required: readonly ["top", "left", "bottom", "right"];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly required: readonly ["size", "top_left"];
                readonly type: "object";
                readonly additionalProperties: true;
            };
            readonly webhook: {
                readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                readonly type: "string";
                readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                readonly examples: readonly ["https://host.domain.tld/to/webhook"];
            };
            readonly config: {
                readonly description: "Advanced configuration option";
                readonly properties: {
                    readonly logo: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                    readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                    readonly pattern: "((https|s3):\\/\\/.+)";
                                };
                                readonly position: {
                                    readonly items: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly type: "array";
                                    readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                    readonly minItems: 2;
                                    readonly maxItems: 2;
                                    readonly examples: readonly [0, 500];
                                };
                            };
                            readonly required: readonly ["url", "position"];
                            readonly type: "object";
                            readonly additionalProperties: true;
                        }, {
                            readonly type: "boolean";
                        }];
                    };
                    readonly overlay: {
                        readonly description: "URL to overlay video to add on the animated result";
                        readonly type: "string";
                        readonly pattern: "(https|s3):.*\\.(?:mp4|mov|mpeg)";
                        readonly examples: readonly ["https://path.to.directory/movie.mp4"];
                    };
                    readonly mute: {
                        readonly type: "boolean";
                        readonly description: "mutes the driver sound in the animated video result, defaults to true";
                    };
                    readonly stitch: {
                        readonly type: "boolean";
                        readonly description: "stitch back the animated result to the original image";
                    };
                    readonly max_animated_faces: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "the amount of faces to animate when stitch: true. Defaults to 5";
                        readonly minimum: 1;
                        readonly maximum: 5;
                    };
                    readonly result_format: {
                        readonly description: "the file format of the animated video result";
                        readonly type: "string";
                        readonly enum: readonly ["mp4", "gif", "mov"];
                    };
                };
                readonly type: "object";
                readonly additionalProperties: true;
            };
            readonly user_data: {
                readonly description: "Non-sensitive custom data that will be added to the animation response and webhook.";
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 500;
                readonly pattern: "^(?!\\s*$).+$";
            };
        };
        readonly required: readonly ["source_url"];
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the animation";
                };
                readonly object: {
                    readonly type: "string";
                    readonly description: "An identifier of this animation";
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly description: "The user id of the user that created the animation";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Animation creation time as iso-8601 string";
                };
                readonly status: {
                    readonly description: "The status of the animation\n\n`created` `done` `error` `started`";
                    readonly enum: readonly ["created", "done", "error", "started"];
                    readonly type: "string";
                };
            };
            readonly required: readonly ["id", "object", "created_by", "created_at", "status"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateClip: {
    readonly body: {
        readonly properties: {
            readonly presenter_id: {
                readonly type: "string";
                readonly description: "a selection from the list or provided driver ids.";
                readonly examples: readonly ["amy-Aq6OmGZnMt"];
            };
            readonly driver_id: {
                readonly type: "string";
                readonly description: "a selection from the list or provided driver ids.\nIf not provided a driver video will be selected for you from the predefined drivers bank.";
                readonly examples: readonly ["Vcq0R4a8F0"];
            };
            readonly script: {
                readonly anyOf: readonly [{
                    readonly description: "Text script contains an input text to be spoken by the actor";
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["text"];
                            readonly description: "The type of the script.";
                        };
                        readonly subtitles: {
                            readonly type: "boolean";
                            readonly description: "Should subtitles be created.";
                            readonly default: "false";
                        };
                        readonly provider: {
                            readonly description: "text-to-speech provider from list of supported providers. default is microsoft tts";
                            readonly anyOf: readonly [{
                                readonly description: "AzureMicrosoft provider details, contains the provider type and requested voice id and style";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["microsoft"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference/microsoft-azure";
                                        readonly default: "en-US-JennyNeural";
                                        readonly examples: readonly ["en-US-JennyNeural"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options";
                                        readonly properties: {
                                            readonly style: {
                                                readonly type: "string";
                                                readonly description: "The style of the voice.\nAvailable styles change between voices.";
                                            };
                                            readonly rate: {
                                                readonly type: "string";
                                                readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                                readonly examples: readonly ["0.5"];
                                            };
                                            readonly pitch: {
                                                readonly type: "string";
                                                readonly description: "The pitch of the voice.\nValue could be an absolute value in Hz (including units), a relative value in Hz or st(semitones)\nor a constant value from x-low/low/medium/high/x-high.";
                                                readonly examples: readonly ["+2st"];
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly description: "Afflorithmics provider details, contains the provider type and requested voice id, available for enterprise users.";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["afflorithmics"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.";
                                        readonly default: "abc123DEF456";
                                        readonly examples: readonly ["abc123DEF456"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options. Read more here: https://docs.audiostack.ai/reference/postspeech";
                                        readonly properties: {
                                            readonly rate: {
                                                readonly type: "string";
                                                readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                                readonly default: "1";
                                                readonly examples: readonly ["1.2"];
                                            };
                                            readonly silencePadding: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "Amount of microseconds for silence padding. Half of the amount is inserted as silence at the beginning and at the end of each Speech file.";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly voiceIntelligence: {
                                                readonly type: "boolean";
                                                readonly description: "Flag to apply lexicographical text corrections";
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly description: "Elevenlabs provider details, contains the provider type and requested voice id, available for premium users.";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["elevenlabs"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices. https://api.elevenlabs.io/v1/voices.";
                                        readonly default: "21m00Tcm4TlvDq8ikWAM";
                                        readonly examples: readonly ["21m00Tcm4TlvDq8ikWAM"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options. Read more here: https://docs.elevenlabs.io/speech-synthesis/voice-settings";
                                        readonly properties: {
                                            readonly stability: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "How stable the voice is and the randomness of each new generation.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly similarity_boost: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The similarity slider dictates how closely the AI should adhere to the original voice when attempting to replicate it.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly model_id: {
                                        readonly type: "string";
                                        readonly description: "The model id from the list of available models. https://elevenlabs.io/docs/speech-synthesis/models.";
                                        readonly default: "eleven_multilingual_v2";
                                        readonly examples: readonly ["eleven_multilingual_v2"];
                                    };
                                    readonly shouldAddDefaultOutputFormat: {
                                        readonly type: "boolean";
                                        readonly description: "Add default outputformat to the stream request if true";
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly description: "Amazon provider details, contains the provider type and requested voice id";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["amazon"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference/text-to-speech-providers";
                                        readonly type: readonly ["string", "null"];
                                        readonly enum: readonly ["Amy", "Aria", "Ayanda", "Bianca", "Brian", "Camila", "Emma", "Gabrielle", "Ivy", "Joanna", "Joey", "Justin", "Kendra", "Kevin", "Kimberly", "Lea", "Lucia", "Lupe", "Matthew", "Olivia", "Salli", "Seoyeon", "Takumi", "Vicki"];
                                        readonly examples: readonly ["Joanna"];
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["google"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.";
                                        readonly default: "he-IL-Wavenet-A";
                                        readonly examples: readonly ["he-IL-Wavenet-A"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }];
                        };
                        readonly input: {
                            readonly type: "string";
                            readonly description: "The input text that will be synthesized to an audio file.\nNote that each provider has its own limitations on the text length.";
                            readonly maxLength: 40000;
                            readonly minLength: 3;
                            readonly examples: readonly ["This is an example text"];
                        };
                        readonly ssml: {
                            readonly type: "boolean";
                            readonly description: "Is the text provided in ssml form.";
                            readonly default: "false";
                        };
                    };
                    readonly required: readonly ["type", "input"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }, {
                    readonly description: "Audio script contains an audio file url to be spoken by the actor";
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["audio"];
                            readonly description: "The type of the script.";
                        };
                        readonly subtitles: {
                            readonly type: "boolean";
                            readonly description: "Should subtitles be created.";
                            readonly default: "false";
                        };
                        readonly audio_url: {
                            readonly description: "The URL of the audio file which will be used by the actor.\nFile size is limited to 15MB.\nAudio length is limited 5 minutes for clips and 10 minutes for talks.";
                            readonly type: "string";
                            readonly pattern: "^(https|s3):\\/\\/[\\S]+\\.(?:m4a|M4A|flac|FLAC|mp3|MP3|mp4|MP4|wav|WAV)([?#][\\w.\\/=&#%-]+)?$";
                            readonly examples: readonly ["https://path.to/audio.mp3"];
                        };
                    };
                    readonly required: readonly ["type", "audio_url"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }];
            };
            readonly config: {
                readonly description: "Advanced configuration options.";
                readonly properties: {
                    readonly logo: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                    readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                    readonly pattern: "((https|s3):\\/\\/.+)";
                                };
                                readonly position: {
                                    readonly items: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly type: "array";
                                    readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                    readonly minItems: 2;
                                    readonly maxItems: 2;
                                    readonly examples: readonly [0, 500];
                                };
                            };
                            readonly required: readonly ["url", "position"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly type: "boolean";
                        }];
                    };
                    readonly result_format: {
                        readonly type: "string";
                        readonly enum: readonly ["mp4", "gif", "mov", "webm"];
                        readonly description: "File format of the animated result\n\nDefault: `mp4`";
                        readonly default: "mp4";
                    };
                };
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly created_by: {
                readonly type: "string";
                readonly description: "The user created the clip.";
            };
            readonly presenter_config: {
                readonly description: "Advanced presenter configuration options.";
                readonly properties: {
                    readonly crop: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly type: {
                                    readonly type: readonly ["string", "null"];
                                    readonly enum: readonly ["wide"];
                                    readonly description: "The type of the crop.";
                                };
                            };
                            readonly required: readonly ["type"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly description: "Custom crop";
                            readonly properties: {
                                readonly type: {
                                    readonly type: readonly ["string", "null"];
                                    readonly enum: readonly ["rectangle"];
                                    readonly description: "The type of the crop.";
                                };
                                readonly rectangle: {
                                    readonly properties: {
                                        readonly bottom: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Bottom position.";
                                            readonly examples: readonly [1];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Right position.";
                                            readonly examples: readonly [1];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Left position.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly top: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Top position.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                    };
                                    readonly required: readonly ["bottom", "right", "left", "top"];
                                    readonly type: "object";
                                    readonly description: "A set of numbers between 0 and 1 representing the top, left, right and bottom of the crop.\nEach number correlates to the distance from the top left corner of the image, relative the the image width.\nFor example, right: 0.75 means that the right side of the crop is 75% of the image width from the left side.";
                                };
                            };
                            readonly required: readonly ["type", "rectangle"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }];
                    };
                };
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly background: {
                readonly description: "Background color of the clip result";
                readonly properties: {
                    readonly color: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "boolean";
                            readonly enum: readonly [false];
                        }];
                        readonly description: "Background color of the animated result, or false to use transparent background in-case of webm result format.";
                        readonly pattern: "^#[a-fA-F0-9]{6}$";
                        readonly examples: readonly ["#47ffff"];
                    };
                    readonly source_url: {
                        readonly type: "string";
                        readonly description: "URL to image that will be used as background.";
                        readonly examples: readonly ["https://path.to.image/"];
                    };
                };
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly user_data: {
                readonly description: "Non-sensitive custom data that will be added to the clip response and webhook.";
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 500;
                readonly pattern: "^(?!\\s*$).+$";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the clip";
            };
            readonly webhook: {
                readonly description: "A webhook URL for sending the payload including animate details.\nIn a case of empty value, the webhook will not be triggered.";
                readonly type: "string";
                readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                readonly examples: readonly ["https://host.domain.tld/to/webhook"];
            };
            readonly result_url: {
                readonly description: "The URL of the clip video, if not provided use default destination.";
                readonly type: "string";
                readonly pattern: "(https|s3):\\/\\/.+";
                readonly examples: readonly ["https://path.to.directory/"];
            };
            readonly raw_result_url: {
                readonly description: "The URL of the raw clip video, if not provided use default destination.";
                readonly type: "string";
                readonly pattern: "(https|s3):\\/\\/.+";
                readonly examples: readonly ["https://path.to.directory/"];
            };
            readonly persist: {
                readonly type: "boolean";
                readonly description: "Whether the video should remain in storage without TTL.";
            };
        };
        readonly required: readonly ["presenter_id", "script"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "x-api-key-external": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "It is possible to add external API key for TTS generation, to access the API programmatically. The x-api-key-external header must be added, the required value format is {\"elevenlabs\": \"your-api-key\"}. Note: Your ElevenLabs quota consumes. Example: x-api-key-external: \"{\"elevenlabs\": \"ABCDEFGH123456\"}\"";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the clip";
                };
                readonly object: {
                    readonly type: readonly ["string", "null"];
                    readonly enum: readonly ["clip"];
                    readonly description: "An identifier of this clip\n\n`clip`";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Clip creation time as iso-8601 string";
                };
                readonly status: {
                    readonly description: "The status of the clip\n\n`created` `done` `error` `started` `rejected`";
                    readonly enum: readonly ["created", "done", "error", "started", "rejected"];
                    readonly type: "string";
                };
            };
            readonly required: readonly ["id", "object", "created_at", "status"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "451": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateClipStream: {
    readonly body: {
        readonly properties: {
            readonly session_id: {
                readonly type: "string";
            };
            readonly presenter_id: {
                readonly type: "string";
                readonly description: "a selection from the list or provided driver ids.";
                readonly deprecated: true;
                readonly examples: readonly ["amy-Aq6OmGZnMt"];
            };
            readonly driver_id: {
                readonly type: "string";
                readonly description: "a selection from the list or provided driver ids.\nIf not provided a driver video will be selected for you from the predefined drivers bank.";
                readonly default: "a5PgMbeGQE";
                readonly deprecated: true;
                readonly examples: readonly ["a5PgMbeGQE"];
            };
            readonly script: {
                readonly anyOf: readonly [{
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["text"];
                            readonly description: "The type of the script.";
                        };
                        readonly provider: {
                            readonly description: "text-to-speech provider from list of supported providers. default is microsoft tts";
                            readonly anyOf: readonly [{
                                readonly description: "AzureMicrosoft provider details, contains the provider type and requested voice id and style";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["microsoft"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference/microsoft-azure";
                                        readonly default: "en-US-JennyNeural";
                                        readonly examples: readonly ["en-US-JennyNeural"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options";
                                        readonly properties: {
                                            readonly style: {
                                                readonly type: "string";
                                                readonly description: "The style of the voice.\nAvailable styles change between voices.";
                                            };
                                            readonly rate: {
                                                readonly type: "string";
                                                readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                                readonly examples: readonly ["0.5"];
                                            };
                                            readonly pitch: {
                                                readonly type: "string";
                                                readonly description: "The pitch of the voice.\nValue could be an absolute value in Hz (including units), a relative value in Hz or st(semitones)\nor a constant value from x-low/low/medium/high/x-high.";
                                                readonly examples: readonly ["+2st"];
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["elevenlabs"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices. https://api.elevenlabs.io/v1/voices.";
                                        readonly default: "21m00Tcm4TlvDq8ikWAM";
                                        readonly examples: readonly ["21m00Tcm4TlvDq8ikWAM"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options. Read more here: https://docs.elevenlabs.io/speech-synthesis/voice-settings";
                                        readonly properties: {
                                            readonly stability: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "How stable the voice is and the randomness of each new generation.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly similarity_boost: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The similarity slider dictates how closely the AI should adhere to the original voice when attempting to replicate it.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly model_id: {
                                        readonly type: "string";
                                        readonly description: "The model id from the list of available models. https://elevenlabs.io/docs/speech-synthesis/models.";
                                        readonly default: "eleven_multilingual_v2";
                                        readonly examples: readonly ["eleven_multilingual_v2"];
                                    };
                                    readonly shouldAddDefaultOutputFormat: {
                                        readonly type: "boolean";
                                        readonly description: "Add default outputformat to the stream request if true";
                                    };
                                    readonly access: {
                                        readonly description: "The access level of the requested voice.";
                                        readonly enum: readonly ["public", "premium", "private", "external-private"];
                                        readonly type: "string";
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }];
                        };
                        readonly input: {
                            readonly type: "string";
                            readonly description: "The input text that will be synthesized to an audio file.\nNote that each provider has its own limitations on the text length.";
                            readonly maxLength: 40000;
                            readonly minLength: 3;
                            readonly examples: readonly ["This is an example text"];
                        };
                        readonly ssml: {
                            readonly type: "boolean";
                            readonly description: "Is the text provided in ssml form.";
                            readonly default: "false";
                        };
                    };
                    readonly required: readonly ["type", "input"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }, {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["audio"];
                            readonly description: "The type of the script.";
                        };
                        readonly audio_url: {
                            readonly description: "The URL of the audio file which will be used by the actor.\nFile size is limit to 15MB.";
                            readonly type: "string";
                            readonly pattern: "^(https|s3):\\/\\/[\\S]+\\.(?:m4a|M4A|flac|FLAC|mp3|MP3|mp4|MP4|wav|WAV)([?#][\\w.\\/=&#%-]+)?$";
                            readonly examples: readonly ["https://path.to/audio.mp3"];
                        };
                    };
                    readonly required: readonly ["type", "audio_url"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }, {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["llm"];
                        };
                        readonly provider: {
                            readonly anyOf: readonly [{
                                readonly description: "AzureMicrosoft provider details, contains the provider type and requested voice id and style";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["microsoft"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference/microsoft-azure";
                                        readonly default: "en-US-JennyNeural";
                                        readonly examples: readonly ["en-US-JennyNeural"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options";
                                        readonly properties: {
                                            readonly style: {
                                                readonly type: "string";
                                                readonly description: "The style of the voice.\nAvailable styles change between voices.";
                                            };
                                            readonly rate: {
                                                readonly type: "string";
                                                readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                                readonly examples: readonly ["0.5"];
                                            };
                                            readonly pitch: {
                                                readonly type: "string";
                                                readonly description: "The pitch of the voice.\nValue could be an absolute value in Hz (including units), a relative value in Hz or st(semitones)\nor a constant value from x-low/low/medium/high/x-high.";
                                                readonly examples: readonly ["+2st"];
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["elevenlabs"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices. https://api.elevenlabs.io/v1/voices.";
                                        readonly default: "21m00Tcm4TlvDq8ikWAM";
                                        readonly examples: readonly ["21m00Tcm4TlvDq8ikWAM"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options. Read more here: https://docs.elevenlabs.io/speech-synthesis/voice-settings";
                                        readonly properties: {
                                            readonly stability: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "How stable the voice is and the randomness of each new generation.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly similarity_boost: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The similarity slider dictates how closely the AI should adhere to the original voice when attempting to replicate it.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly model_id: {
                                        readonly type: "string";
                                        readonly description: "The model id from the list of available models. https://elevenlabs.io/docs/speech-synthesis/models.";
                                        readonly default: "eleven_multilingual_v2";
                                        readonly examples: readonly ["eleven_multilingual_v2"];
                                    };
                                    readonly shouldAddDefaultOutputFormat: {
                                        readonly type: "boolean";
                                        readonly description: "Add default outputformat to the stream request if true";
                                    };
                                    readonly access: {
                                        readonly description: "The access level of the requested voice.";
                                        readonly enum: readonly ["public", "premium", "private", "external-private"];
                                        readonly type: "string";
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }];
                        };
                        readonly ssml: {
                            readonly type: "boolean";
                        };
                        readonly llm: {
                            readonly properties: {
                                readonly provider: {
                                    readonly type: readonly ["string", "null"];
                                    readonly enum: readonly ["openai"];
                                };
                                readonly messages: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly role: {
                                                readonly type: "string";
                                                readonly enum: readonly ["system", "user", "assistant"];
                                            };
                                            readonly content: {
                                                readonly type: "string";
                                            };
                                            readonly created_at: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["role", "content", "created_at"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["provider", "messages"];
                            readonly type: "object";
                        };
                        readonly input: {
                            readonly type: "string";
                        };
                        readonly stream_audio: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["type", "llm"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }];
            };
            readonly config: {
                readonly description: "Advanced configuration options.";
                readonly properties: {
                    readonly logo: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                    readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                    readonly pattern: "((https|s3):\\/\\/.+)";
                                };
                                readonly position: {
                                    readonly items: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly type: "array";
                                    readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                    readonly minItems: 2;
                                    readonly maxItems: 2;
                                    readonly examples: readonly [0, 500];
                                };
                            };
                            readonly required: readonly ["url", "position"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly type: "boolean";
                        }];
                    };
                    readonly result_format: {
                        readonly type: "string";
                        readonly enum: readonly ["mp4", "gif", "mov"];
                        readonly description: "File format of the animated result\n\nDefault: `mp4`";
                        readonly default: "mp4";
                    };
                };
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly created_by: {
                readonly type: "string";
                readonly description: "The user created the clip.";
            };
            readonly presenter_config: {
                readonly description: "Advanced presenter configuration options.";
                readonly properties: {
                    readonly crop: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly type: {
                                    readonly type: readonly ["string", "null"];
                                    readonly enum: readonly ["wide"];
                                    readonly description: "The type of the crop.";
                                };
                            };
                            readonly required: readonly ["type"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly description: "Custom crop";
                            readonly properties: {
                                readonly type: {
                                    readonly type: readonly ["string", "null"];
                                    readonly enum: readonly ["rectangle"];
                                    readonly description: "The type of the crop.";
                                };
                                readonly rectangle: {
                                    readonly properties: {
                                        readonly bottom: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Bottom position.";
                                            readonly examples: readonly [1];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Right position.";
                                            readonly examples: readonly [1];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Left position.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly top: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Top position.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                    };
                                    readonly required: readonly ["bottom", "right", "left", "top"];
                                    readonly type: "object";
                                    readonly description: "A set of numbers between 0 and 1 representing the top, left, right and bottom of the crop.\nEach number correlates to the distance from the top left corner of the image, relative the the image width.\nFor example, right: 0.75 means that the right side of the crop is 75% of the image width from the left side.";
                                };
                            };
                            readonly required: readonly ["type", "rectangle"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }];
                    };
                };
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly background: {
                readonly description: "Background color of the clip result";
                readonly properties: {
                    readonly color: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "boolean";
                            readonly enum: readonly [false];
                        }];
                        readonly description: "Background color of the animated result, or false to use transparent background in-case of webm result format.";
                        readonly pattern: "^#[a-fA-F0-9]{6}$";
                        readonly examples: readonly ["#47ffff"];
                    };
                    readonly source_url: {
                        readonly type: "string";
                        readonly description: "URL to image that will be used as background.";
                        readonly examples: readonly ["https://path.to.image/"];
                    };
                };
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly user_data: {
                readonly description: "Non-sensitive custom data that will be added to the clip response and webhook.";
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 500;
                readonly pattern: "^(?!\\s*$).+$";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the clip";
            };
            readonly result_url: {
                readonly description: "The URL of the clip video, if not provided use default destination.";
                readonly type: "string";
                readonly pattern: "(https|s3):\\/\\/.+";
                readonly examples: readonly ["https://path.to.directory/"];
            };
            readonly raw_result_url: {
                readonly description: "The URL of the raw clip video, if not provided use default destination.";
                readonly type: "string";
                readonly pattern: "(https|s3):\\/\\/.+";
                readonly examples: readonly ["https://path.to.directory/"];
            };
            readonly metadata: {
                readonly description: "Metadata passed to the clips worker";
            };
        };
        readonly required: readonly ["script"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the stream identifier";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-api-key-external": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "It is possible to add external API key for TTS generation, to access the API programmatically. The x-api-key-external header must be added, the required value format is {\"elevenlabs\": \"your-api-key\"}. Note: Your ElevenLabs quota consumes. Example: x-api-key-external: \"{\"elevenlabs\": \"ABCDEFGH123456\"}\"";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly duration: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly session_id: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["duration", "session_id", "status"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateStream: {
    readonly body: {
        readonly properties: {
            readonly source_url: {
                readonly type: "string";
                readonly description: "URL to a photo you wish to animate in the stream";
            };
            readonly driver_url: {
                readonly type: "string";
                readonly description: "The URL of the driver video to drive the talk, or a selection from the list or provided drivers.\nIf not provided a driver video will be selected for you from the predefined drivers bank.";
            };
            readonly face: {
                readonly description: "the face to animate - otherwise detects the dominant face";
                readonly properties: {
                    readonly size: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly description: "Size of the square side";
                        readonly minimum: 0;
                        readonly examples: readonly [512];
                        readonly maximum: 2147483647;
                    };
                    readonly top_left: {
                        readonly items: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly type: "array";
                        readonly description: "Top left location of the face in the frame - can be negative";
                        readonly minItems: 2;
                        readonly maxItems: 2;
                    };
                    readonly overlap: {
                        readonly enum: readonly ["NO", "PARTIAL", "YES", "UNKNOWN"];
                        readonly type: "string";
                    };
                    readonly face_id: {
                        readonly type: "string";
                    };
                    readonly detect_confidence: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly sharpness: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly face_occluded: {
                        readonly type: "boolean";
                    };
                    readonly face_occluded_confidence: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly detection: {
                        readonly properties: {
                            readonly top: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly left: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly bottom: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly right: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly required: readonly ["top", "left", "bottom", "right"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["size", "top_left"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly config: {
                readonly description: "Advanced configuration options.";
                readonly properties: {
                    readonly motion_factor: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "Amplifies or damps the animation movements";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly align_expand_factor: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "The amount of expansion % used for face cropping";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly stitch: {
                        readonly type: "boolean";
                        readonly description: "Stitch back the animated result to the original image";
                    };
                };
                readonly type: "object";
            };
            readonly compatibility_mode: {
                readonly description: "Defines the video codec to be used in the stream.\nWhen set to on: VP8 will be used.\nWhen set to off: H264 will be used\nWhen set to auto the codec will be selected according to the browser.";
                readonly type: "string";
                readonly enum: readonly ["on", "off", "auto"];
            };
            readonly stream_warmup: {
                readonly type: "boolean";
                readonly description: "Whether to stream wamrup video on the connection.\nIf set to true, will stream a warmup video when connection is established.\nAt the end of the warmup video, a message containing \"stream/ready\" will be sent on the data channel.";
                readonly default: "false";
            };
            readonly session_timeout: {
                readonly type: "number";
                readonly format: "double";
                readonly description: "Maximum duration (in seconds) between messages before session times out.\nCan only be used with proper permissions";
                readonly maximum: 300;
                readonly examples: readonly [180];
                readonly minimum: -1.7976931348623157e+308;
            };
            readonly stream_resolution: {
                readonly type: "number";
                readonly format: "double";
                readonly description: "The stream resolution sets the maximum height or width resolution of the streamed video,\nwith the aspect ratio preserved from the source image.\nCan only be used when 'stitch' is set to true.";
                readonly maximum: 1080;
                readonly examples: readonly [720];
                readonly minimum: -1.7976931348623157e+308;
            };
        };
        readonly required: readonly ["source_url"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "user-agent": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly session_id: {
                    readonly type: "string";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "Id of the stream - should be returned as *path parameter* in all streaming request to the same stream";
                };
                readonly jsep: {
                    readonly description: "Jsep offer object used to create a peer connection";
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["offer"];
                            readonly description: "The session description object describes the initial proposal in an offer/answer exchange.\n\n`offer`";
                        };
                        readonly sdp: {
                            readonly type: "string";
                            readonly description: "Describe the media communication sessions to accept the session the is being negotiated";
                        };
                    };
                    readonly required: readonly ["type", "sdp"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly ice_servers: {
                    readonly items: {
                        readonly properties: {
                            readonly urls: {
                                readonly anyOf: readonly [{
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly type: "array";
                                }, {
                                    readonly type: "string";
                                }];
                                readonly description: "URL of the server - can be multiple addresses";
                            };
                            readonly username: {
                                readonly type: "string";
                                readonly description: "Username for authentication";
                            };
                            readonly credential: {
                                readonly type: "string";
                                readonly description: "Credintials for secure connection to the server";
                            };
                        };
                        readonly required: readonly ["urls"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                    readonly description: "ICE servers used to create a peer connection";
                };
            };
            readonly required: readonly ["id", "jsep", "ice_servers"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateStream1: {
    readonly body: {
        readonly properties: {
            readonly presenter_id: {
                readonly type: "string";
                readonly description: "ID of the selected presenter.";
                readonly examples: readonly ["rian-lZC6MmWfC1"];
            };
            readonly driver_id: {
                readonly type: "string";
                readonly description: "ID of the selected driver.\nIf not provided a driver video will be selected for you from the predefined drivers bank.";
                readonly examples: readonly ["mXra4jY38i"];
            };
            readonly compatibility_mode: {
                readonly description: "Defines the video codec to be used in the stream.\nWhen set to on: VP8 will be used.\nWhen set to off: H264 will be used\nWhen set to auto the codec will be selected according to the browser.";
                readonly type: "string";
                readonly enum: readonly ["on", "off", "auto"];
            };
            readonly stream_warmup: {
                readonly type: "boolean";
                readonly description: "Whether to stream wamrup video on the connection.\nIf set to true, will stream a warmup video when connection is established.\nAt the end of the warmup video, a message containing \"stream/ready\" will be sent on the data channel.";
                readonly default: "false";
            };
            readonly session_timeout: {
                readonly type: "number";
                readonly format: "double";
                readonly description: "Maximum duration (in seconds) between messages before session times out.\nCan only be used with proper permissions";
                readonly maximum: 300;
                readonly examples: readonly [180];
                readonly minimum: -1.7976931348623157e+308;
            };
        };
        readonly required: readonly ["presenter_id"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "user-agent": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly session_id: {
                    readonly type: "string";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "Id of the stream - should be returned as *path parameter* in all streaming request to the same stream";
                };
                readonly jsep: {
                    readonly description: "Jsep offer object used to create a peer connection";
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["offer"];
                            readonly description: "The session description object describes the initial proposal in an offer/answer exchange.\n\n`offer`";
                        };
                        readonly sdp: {
                            readonly type: "string";
                            readonly description: "Describe the media communication sessions to accept the session the is being negotiated";
                        };
                    };
                    readonly required: readonly ["type", "sdp"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly ice_servers: {
                    readonly items: {
                        readonly properties: {
                            readonly urls: {
                                readonly anyOf: readonly [{
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly type: "array";
                                }, {
                                    readonly type: "string";
                                }];
                                readonly description: "URL of the server - can be multiple addresses";
                            };
                            readonly username: {
                                readonly type: "string";
                                readonly description: "Username for authentication";
                            };
                            readonly credential: {
                                readonly type: "string";
                                readonly description: "Credintials for secure connection to the server";
                            };
                        };
                        readonly required: readonly ["urls"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                    readonly description: "ICE servers used to create a peer connection";
                };
            };
            readonly required: readonly ["id", "jsep", "ice_servers"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateTalk: {
    readonly body: {
        readonly properties: {
            readonly source_url: {
                readonly description: "The URL of the source image to be animated by the driver video, or a selection from the list of provided\nstudio actors.";
                readonly type: "string";
                readonly pattern: "(https|s3):.*\\.(?:jpg|jpeg|png|JPG|JPEG|PNG)";
                readonly examples: readonly ["https://path.to.directory/image.jpg"];
            };
            readonly driver_url: {
                readonly description: "The URL of the driver video to drive the talk, or a selection from the list or provided drivers\nIf not provided a driver video will be selected for you from the predefined drivers bank";
                readonly type: "string";
                readonly pattern: "(https|s3|bank):\\/\\/.+";
                readonly examples: readonly ["bank://natural"];
            };
            readonly script: {
                readonly anyOf: readonly [{
                    readonly description: "Text script contains an input text to be spoken by the actor";
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["text"];
                            readonly description: "The type of the script.";
                        };
                        readonly subtitles: {
                            readonly type: "boolean";
                            readonly description: "Should subtitles be generated for this script";
                            readonly default: "false";
                        };
                        readonly provider: {
                            readonly description: "text-to-speech provider from list of supported providers. default is microsoft tts";
                            readonly anyOf: readonly [{
                                readonly description: "AzureMicrosoft provider details, contains the provider type and requested voice id and style";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["microsoft"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference//tts-microsoft";
                                        readonly default: "en-US-JennyNeural";
                                        readonly examples: readonly ["en-US-JennyNeural"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options";
                                        readonly properties: {
                                            readonly style: {
                                                readonly type: "string";
                                                readonly description: "The style of the voice.\nAvailable styles change between voices.";
                                            };
                                            readonly rate: {
                                                readonly type: "string";
                                                readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                                readonly examples: readonly ["0.5"];
                                            };
                                            readonly pitch: {
                                                readonly type: "string";
                                                readonly description: "The pitch of the voice.\nValue could be an absolute value in Hz (including units), a relative value in Hz or st(semitones)\nor a constant value from x-low/low/medium/high/x-high.";
                                                readonly examples: readonly ["+2st"];
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly description: "Elevenlabs provider details, contains the provider type and requested voice id";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["elevenlabs"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://api.elevenlabs.io/v1/voices";
                                        readonly default: "21m00Tcm4TlvDq8ikWAM";
                                        readonly examples: readonly ["21m00Tcm4TlvDq8ikWAM"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options";
                                        readonly properties: {
                                            readonly stability: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The stability of the voice.";
                                                readonly minimum: 0;
                                                readonly maximum: 1;
                                                readonly examples: readonly ["0.5"];
                                            };
                                            readonly similarity_boost: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The similarity boost of the voice.";
                                                readonly minimum: 0;
                                                readonly maximum: 1;
                                                readonly examples: readonly ["0.75"];
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly model_id: {
                                        readonly type: "string";
                                        readonly description: "The model id from the list of available models. https://elevenlabs.io/docs/speech-synthesis/models.";
                                        readonly default: "eleven_multilingual_v2";
                                        readonly examples: readonly ["eleven_multilingual_v2"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly description: "Amazon provider details, contains the provider type and requested voice id";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["amazon"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference/tts-amazon";
                                        readonly type: readonly ["string", "null"];
                                        readonly enum: readonly ["Amy", "Aria", "Ayanda", "Bianca", "Brian", "Camila", "Emma", "Gabrielle", "Ivy", "Joanna", "Joey", "Justin", "Kendra", "Kevin", "Kimberly", "Lea", "Lucia", "Lupe", "Matthew", "Olivia", "Salli", "Seoyeon", "Takumi", "Vicki"];
                                        readonly examples: readonly ["Joanna"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly description: "Afflorithmics provider details, contains the provider type and requested voice id";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["afflorithmics"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.";
                                        readonly default: "1a2Bc4dE5fGh";
                                        readonly examples: readonly ["1a2Bc4dE5fGh"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options. Read more here: https://docs.audiostack.ai/reference/postspeech";
                                        readonly properties: {
                                            readonly rate: {
                                                readonly type: "string";
                                                readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                                readonly default: "1";
                                                readonly examples: readonly ["1.2"];
                                            };
                                            readonly silencePadding: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "Amount of microseconds for silence padding. Half of the amount is inserted as silence at the beginning and at the end of each Speech file.";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly voiceIntelligence: {
                                                readonly type: "boolean";
                                                readonly description: "Flag to apply lexicographical text corrections";
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["google"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.";
                                        readonly default: "he-IL-Wavenet-A";
                                        readonly examples: readonly ["he-IL-Wavenet-A"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }];
                        };
                        readonly input: {
                            readonly type: "string";
                            readonly description: "The input text that will be synthesized to an audio file.\nNote that each provider has its own limitations on the text length.\naudio duration is furhter limited in streaming to `01:30` minutes";
                            readonly maxLength: 40000;
                            readonly minLength: 3;
                            readonly examples: readonly ["This is an example text"];
                        };
                        readonly ssml: {
                            readonly type: "boolean";
                            readonly description: "Is the text provided in `SSML` form";
                        };
                    };
                    readonly required: readonly ["type", "input"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }, {
                    readonly description: "Audio script contains an audio file url to be spoken by the actor";
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["audio"];
                            readonly description: "The type of the script.";
                        };
                        readonly subtitles: {
                            readonly type: "boolean";
                            readonly description: "Should subtitles be generated for this script";
                            readonly default: "false";
                        };
                        readonly audio_url: {
                            readonly description: "The URL of the audio file which will be used by the actor.\nFile size is limit to 15MB.";
                            readonly type: "string";
                            readonly pattern: "^(https|s3):\\/\\/[\\S]+\\.(?:m4a|M4A|flac|FLAC|mp3|MP3|mp4|MP4|wav|WAV)([?#][\\w.\\/=&#%-]+)?$";
                            readonly examples: readonly ["https://path.to/audio.mp3"];
                        };
                        readonly reduce_noise: {
                            readonly type: "boolean";
                            readonly description: "Use noise reduction to improve sync quality";
                            readonly default: "false";
                        };
                    };
                    readonly required: readonly ["type", "audio_url"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }];
            };
            readonly config: {
                readonly description: "Advanced configuration options";
                readonly properties: {
                    readonly logo: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                    readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                    readonly pattern: "((https|s3):\\/\\/.+)";
                                };
                                readonly position: {
                                    readonly items: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly type: "array";
                                    readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                    readonly minItems: 2;
                                    readonly maxItems: 2;
                                    readonly examples: readonly [0, 500];
                                };
                            };
                            readonly required: readonly ["url", "position"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly type: "boolean";
                        }];
                    };
                    readonly align_driver: {
                        readonly type: "boolean";
                        readonly description: "Auto crops the driver face, ignored if using drivers bank";
                    };
                    readonly align_expand_factor: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "The amount of expansion % used for face cropping";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly auto_match: {
                        readonly type: "boolean";
                        readonly description: "Finds the best anchor match for the source in driver video";
                    };
                    readonly motion_factor: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "Amplifies or damps the animation movements";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly normalization_factor: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "Normalizes the expression of the source image [0., 1.], 0. means no normalization";
                        readonly minimum: 0;
                        readonly maximum: 1;
                    };
                    readonly sharpen: {
                        readonly type: "boolean";
                        readonly description: "Sharpen results.";
                    };
                    readonly stitch: {
                        readonly type: "boolean";
                        readonly description: "Stitch back the animated result to the original image";
                    };
                    readonly result_format: {
                        readonly description: "File format of the animated result";
                        readonly type: "string";
                        readonly enum: readonly ["mp4", "gif", "mov"];
                    };
                    readonly fluent: {
                        readonly type: "boolean";
                        readonly description: "Interpolate between the last & first frames of the driver video\nWhen used together with `pad_audio` can create a seamless transition between videos of the same driver";
                        readonly default: "false";
                    };
                    readonly pad_audio: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "Pad the audio with silence at the end (given in seconds)\nWill increase the video duration & the credits it consumes";
                        readonly default: "0.0";
                        readonly minimum: 0;
                        readonly maximum: 60;
                    };
                    readonly driver_expressions: {
                        readonly description: "timed expressions for animation, the current expression is not cleared until a new expression is defined.\nPossible expressions include `happy`, `neutral` and more.";
                        readonly properties: {
                            readonly expressions: {
                                readonly items: {
                                    readonly properties: {
                                        readonly start_frame: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The frame number for the expression start point.";
                                            readonly minimum: 0;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly expression: {
                                            readonly description: "The expression to use";
                                            readonly enum: readonly ["neutral", "happy", "serious", "surprise"];
                                            readonly type: "string";
                                        };
                                        readonly intensity: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Controls the intensity you want for this expression (between 0 no expression, 1 maximum)";
                                            readonly minimum: 0;
                                            readonly maximum: 1;
                                        };
                                    };
                                    readonly required: readonly ["start_frame", "expression", "intensity"];
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly type: "array";
                                readonly description: "List of TimedExpression to use";
                            };
                            readonly transition_frames: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly description: "Number of frames to use for the transition between expressions";
                                readonly minimum: 0;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly required: readonly ["expressions"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly user_data: {
                readonly description: "Non-sensitive custom data that will be added to the talk response and webhook";
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 500;
                readonly pattern: "^(?!\\s*$).+$";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the talk video";
            };
            readonly webhook: {
                readonly description: "A webhook URL for sending the payload including animate details\nIn a case of empty value, the webhook will not be triggered";
                readonly type: "string";
                readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                readonly examples: readonly ["https://host.domain.tld/to/webhook"];
            };
            readonly result_url: {
                readonly description: "The URL of the talk video, if not provided use default destination.";
                readonly type: "string";
                readonly pattern: "(https|s3):\\/\\/.+";
                readonly examples: readonly ["https://path.to.directory/"];
            };
            readonly face: {
                readonly description: "The face to animate - otherwise detects the face automatically";
                readonly properties: {
                    readonly size: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly description: "Size of the square side";
                        readonly minimum: 0;
                        readonly examples: readonly [512];
                        readonly maximum: 2147483647;
                    };
                    readonly top_left: {
                        readonly items: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly type: "array";
                        readonly description: "Top left location of the face in the frame - can be negative";
                        readonly minItems: 2;
                        readonly maxItems: 2;
                    };
                    readonly overlap: {
                        readonly enum: readonly ["NO", "PARTIAL", "YES", "UNKNOWN"];
                        readonly type: "string";
                    };
                    readonly face_id: {
                        readonly type: "string";
                    };
                    readonly detect_confidence: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly sharpness: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly face_occluded: {
                        readonly type: "boolean";
                    };
                    readonly face_occluded_confidence: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly detection: {
                        readonly properties: {
                            readonly top: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly left: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly bottom: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly right: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly required: readonly ["top", "left", "bottom", "right"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["size", "top_left"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly persist: {
                readonly type: "boolean";
                readonly description: "Whether the video should remain in storage without TTL.";
            };
        };
        readonly required: readonly ["source_url", "script"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "x-api-key-external": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "It is possible to add external API key for TTS generation, to access the API programmatically. The x-api-key-external header must be added, the required value format is {\"elevenlabs\": \"your-api-key\"}. Note: Your ElevenLabs quota consumes. Example: x-api-key-external: \"{\"elevenlabs\": \"ABCDEFGH123456\"}\"";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the talk";
                };
                readonly object: {
                    readonly type: "string";
                    readonly description: "An identifier of this talk";
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly description: "The user id of the user that created the talk";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Talk creation time as iso-8601 string";
                };
                readonly status: {
                    readonly description: "The status of the talk\n\n`created` `done` `error` `started` `rejected`";
                    readonly enum: readonly ["created", "done", "error", "started", "rejected"];
                    readonly type: "string";
                };
            };
            readonly required: readonly ["id", "object", "created_by", "created_at", "status"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "451": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateTalkStream: {
    readonly body: {
        readonly properties: {
            readonly session_id: {
                readonly type: "string";
            };
            readonly driver_url: {
                readonly description: "The URL of the driver video to drive the talk, or a selection from the list or provided drivers.\nIf not provided a driver video will be selected for you from the predefined drivers bank.";
                readonly deprecated: true;
                readonly type: "string";
                readonly pattern: "(https|s3|bank):\\/\\/.+";
                readonly examples: readonly ["bank://natural"];
            };
            readonly result_url: {
                readonly description: "The URL to save the video result.";
                readonly type: "string";
                readonly pattern: "(https|s3):.*\\.(?:mp4|mov|mpeg)";
                readonly examples: readonly ["https://path.to.directory/movie.mp4"];
            };
            readonly script: {
                readonly anyOf: readonly [{
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["text"];
                            readonly description: "The type of the script.";
                        };
                        readonly provider: {
                            readonly description: "text-to-speech provider from list of supported providers. default is microsoft tts";
                            readonly anyOf: readonly [{
                                readonly description: "AzureMicrosoft provider details, contains the provider type and requested voice id and style";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["microsoft"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference/microsoft-azure";
                                        readonly default: "en-US-JennyNeural";
                                        readonly examples: readonly ["en-US-JennyNeural"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options";
                                        readonly properties: {
                                            readonly style: {
                                                readonly type: "string";
                                                readonly description: "The style of the voice.\nAvailable styles change between voices.";
                                            };
                                            readonly rate: {
                                                readonly type: "string";
                                                readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                                readonly examples: readonly ["0.5"];
                                            };
                                            readonly pitch: {
                                                readonly type: "string";
                                                readonly description: "The pitch of the voice.\nValue could be an absolute value in Hz (including units), a relative value in Hz or st(semitones)\nor a constant value from x-low/low/medium/high/x-high.";
                                                readonly examples: readonly ["+2st"];
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["elevenlabs"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices. https://api.elevenlabs.io/v1/voices.";
                                        readonly default: "21m00Tcm4TlvDq8ikWAM";
                                        readonly examples: readonly ["21m00Tcm4TlvDq8ikWAM"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options. Read more here: https://docs.elevenlabs.io/speech-synthesis/voice-settings";
                                        readonly properties: {
                                            readonly stability: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "How stable the voice is and the randomness of each new generation.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly similarity_boost: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The similarity slider dictates how closely the AI should adhere to the original voice when attempting to replicate it.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly model_id: {
                                        readonly type: "string";
                                        readonly description: "The model id from the list of available models. https://elevenlabs.io/docs/speech-synthesis/models.";
                                        readonly default: "eleven_multilingual_v2";
                                        readonly examples: readonly ["eleven_multilingual_v2"];
                                    };
                                    readonly shouldAddDefaultOutputFormat: {
                                        readonly type: "boolean";
                                        readonly description: "Add default outputformat to the stream request if true";
                                    };
                                    readonly access: {
                                        readonly description: "The access level of the requested voice.";
                                        readonly enum: readonly ["public", "premium", "private", "external-private"];
                                        readonly type: "string";
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }];
                        };
                        readonly input: {
                            readonly type: "string";
                            readonly description: "The input text that will be synthesized to an audio file.\nNote that each provider has its own limitations on the text length.";
                            readonly maxLength: 40000;
                            readonly minLength: 3;
                            readonly examples: readonly ["This is an example text"];
                        };
                        readonly ssml: {
                            readonly type: "boolean";
                            readonly description: "Is the text provided in ssml form.";
                            readonly default: "false";
                        };
                    };
                    readonly required: readonly ["type", "input"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }, {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["audio"];
                            readonly description: "The type of the script.";
                        };
                        readonly audio_url: {
                            readonly description: "The URL of the audio file which will be used by the actor.\nFile size is limit to 15MB.";
                            readonly type: "string";
                            readonly pattern: "^(https|s3):\\/\\/[\\S]+\\.(?:m4a|M4A|flac|FLAC|mp3|MP3|mp4|MP4|wav|WAV)([?#][\\w.\\/=&#%-]+)?$";
                            readonly examples: readonly ["https://path.to/audio.mp3"];
                        };
                    };
                    readonly required: readonly ["type", "audio_url"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }, {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["llm"];
                        };
                        readonly provider: {
                            readonly anyOf: readonly [{
                                readonly description: "AzureMicrosoft provider details, contains the provider type and requested voice id and style";
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["microsoft"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference/microsoft-azure";
                                        readonly default: "en-US-JennyNeural";
                                        readonly examples: readonly ["en-US-JennyNeural"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options";
                                        readonly properties: {
                                            readonly style: {
                                                readonly type: "string";
                                                readonly description: "The style of the voice.\nAvailable styles change between voices.";
                                            };
                                            readonly rate: {
                                                readonly type: "string";
                                                readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                                readonly examples: readonly ["0.5"];
                                            };
                                            readonly pitch: {
                                                readonly type: "string";
                                                readonly description: "The pitch of the voice.\nValue could be an absolute value in Hz (including units), a relative value in Hz or st(semitones)\nor a constant value from x-low/low/medium/high/x-high.";
                                                readonly examples: readonly ["+2st"];
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly properties: {
                                    readonly type: {
                                        readonly enum: readonly ["elevenlabs"];
                                        readonly type: "string";
                                    };
                                    readonly voice_id: {
                                        readonly type: "string";
                                        readonly description: "The voice_id from the list of available voices. https://api.elevenlabs.io/v1/voices.";
                                        readonly default: "21m00Tcm4TlvDq8ikWAM";
                                        readonly examples: readonly ["21m00Tcm4TlvDq8ikWAM"];
                                    };
                                    readonly voice_config: {
                                        readonly description: "Voice customization options. Read more here: https://docs.elevenlabs.io/speech-synthesis/voice-settings";
                                        readonly properties: {
                                            readonly stability: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "How stable the voice is and the randomness of each new generation.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly similarity_boost: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The similarity slider dictates how closely the AI should adhere to the original voice when attempting to replicate it.";
                                                readonly examples: readonly ["0"];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly model_id: {
                                        readonly type: "string";
                                        readonly description: "The model id from the list of available models. https://elevenlabs.io/docs/speech-synthesis/models.";
                                        readonly default: "eleven_multilingual_v2";
                                        readonly examples: readonly ["eleven_multilingual_v2"];
                                    };
                                    readonly shouldAddDefaultOutputFormat: {
                                        readonly type: "boolean";
                                        readonly description: "Add default outputformat to the stream request if true";
                                    };
                                    readonly access: {
                                        readonly description: "The access level of the requested voice.";
                                        readonly enum: readonly ["public", "premium", "private", "external-private"];
                                        readonly type: "string";
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Voice customization options. To save the language of the selected agent voice";
                                        readonly examples: readonly ["English (United States)"];
                                    };
                                };
                                readonly required: readonly ["type", "voice_id"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }];
                        };
                        readonly ssml: {
                            readonly type: "boolean";
                        };
                        readonly llm: {
                            readonly properties: {
                                readonly provider: {
                                    readonly type: readonly ["string", "null"];
                                    readonly enum: readonly ["openai"];
                                };
                                readonly messages: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly role: {
                                                readonly type: "string";
                                                readonly enum: readonly ["system", "user", "assistant"];
                                            };
                                            readonly content: {
                                                readonly type: "string";
                                            };
                                            readonly created_at: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["role", "content", "created_at"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["provider", "messages"];
                            readonly type: "object";
                        };
                        readonly input: {
                            readonly type: "string";
                        };
                        readonly stream_audio: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["type", "llm"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                }];
            };
            readonly config: {
                readonly description: "Construct a type with the properties of T except for those in type K.";
                readonly type: "object";
                readonly additionalProperties: false;
                readonly properties: {
                    readonly motion_factor: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "Amplifies or damps the animation movements";
                        readonly deprecated: true;
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly align_expand_factor: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "The amount of expansion % used for face cropping";
                        readonly deprecated: true;
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly stitch: {
                        readonly type: "boolean";
                        readonly description: "Stitch back the animated result to the original image";
                        readonly deprecated: true;
                    };
                    readonly align_driver: {
                        readonly type: "boolean";
                        readonly description: "Auto crops the driver face, ignored if using drivers bank";
                    };
                    readonly auto_match: {
                        readonly type: "boolean";
                        readonly description: "Finds the best anchor match for the source in driver video";
                    };
                    readonly normalization_factor: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "Normalizes the expression of the source image [0., 1.], 0. means no normalization";
                        readonly minimum: 0;
                        readonly maximum: 1;
                    };
                    readonly sharpen: {
                        readonly type: "boolean";
                        readonly description: "Sharpen results.";
                    };
                    readonly result_format: {
                        readonly description: "File format of the animated result";
                        readonly type: "string";
                        readonly enum: readonly ["mp4", "gif", "mov"];
                    };
                    readonly fluent: {
                        readonly type: "boolean";
                        readonly description: "Interpolate between the last & first frames of the driver video\nWhen used together with `pad_audio` can create a seamless transition between videos of the same driver";
                        readonly default: "false";
                    };
                    readonly pad_audio: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "Pad the audio with silence at the end (given in seconds)\nWill increase the video duration & the credits it consumes";
                        readonly default: "0.0";
                        readonly minimum: 0;
                        readonly maximum: 60;
                    };
                };
            };
            readonly user_data: {
                readonly description: "Non-sensitive custom data that will be added to the talk response and webhook.";
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 500;
                readonly pattern: "^(?!\\s*$).+$";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the talk video";
            };
            readonly audio_optimization: {
                readonly type: "number";
                readonly format: "double";
                readonly description: "The optimization level of the audio";
                readonly default: "2";
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
            readonly metadata: {
                readonly description: "Metadata passed to the talks worker";
            };
        };
        readonly required: readonly ["script"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the stream identifier";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-api-key-external": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "It is possible to add external API key for TTS generation, to access the API programmatically. The x-api-key-external header must be added, the required value format is {\"elevenlabs\": \"your-api-key\"}. Note: Your ElevenLabs quota consumes. Example: x-api-key-external: \"{\"elevenlabs\": \"ABCDEFGH123456\"}\"";
                };
                readonly cookie: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly session_id: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["session_id", "status"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateTask: {
    readonly body: {
        readonly properties: {
            readonly source_url: {
                readonly description: "The URL of the source image to be animated by the driver video. Image type of jpg|jpeg|tiff|png|bmp";
                readonly type: "string";
                readonly pattern: "(https|s3):.*\\.(?:jpg|jpeg|tiff|png|bmp|JPG|JPEG|TIFF|PNG|BMP)";
                readonly examples: readonly ["https://path.to/image.jpg"];
            };
            readonly driver_url: {
                readonly description: "The URL of the driver video to drive the animation, if not provided a driver video will be selected for you from the predefined DriversBank";
                readonly type: "string";
                readonly pattern: "(https|s3|bank):\\/\\/.+";
                readonly examples: readonly ["bank://nostalgia/"];
            };
            readonly result_url: {
                readonly description: "The URL of the animation video, if not provided use default destination\nSupports S3 Signed URLs";
                readonly type: "string";
                readonly pattern: "(https|s3):\\/\\/.+";
                readonly examples: readonly ["https://path.to.directory/movie.mp4"];
            };
            readonly face: {
                readonly description: "the face to animate - otherwise detects the dominant face";
                readonly properties: {
                    readonly size: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly description: "Size of the square side";
                        readonly minimum: 0;
                        readonly examples: readonly [512];
                        readonly maximum: 2147483647;
                    };
                    readonly top_left: {
                        readonly items: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly type: "array";
                        readonly description: "Top left location of the face in the frame - can be negative";
                        readonly minItems: 2;
                        readonly maxItems: 2;
                    };
                    readonly overlap: {
                        readonly enum: readonly ["NO", "PARTIAL", "YES", "UNKNOWN"];
                        readonly type: "string";
                    };
                    readonly face_id: {
                        readonly type: "string";
                    };
                    readonly detect_confidence: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly sharpness: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly face_occluded: {
                        readonly type: "boolean";
                    };
                    readonly face_occluded_confidence: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly detection: {
                        readonly properties: {
                            readonly top: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly left: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly bottom: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly right: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly required: readonly ["top", "left", "bottom", "right"];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly required: readonly ["size", "top_left"];
                readonly type: "object";
                readonly additionalProperties: true;
            };
            readonly webhook: {
                readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                readonly type: "string";
                readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                readonly examples: readonly ["https://host.domain.tld/to/webhook"];
            };
            readonly config: {
                readonly description: "Advanced configuration option";
                readonly properties: {
                    readonly logo: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                    readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                    readonly pattern: "((https|s3):\\/\\/.+)";
                                };
                                readonly position: {
                                    readonly items: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly type: "array";
                                    readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                    readonly minItems: 2;
                                    readonly maxItems: 2;
                                    readonly examples: readonly [0, 500];
                                };
                            };
                            readonly required: readonly ["url", "position"];
                            readonly type: "object";
                            readonly additionalProperties: true;
                        }, {
                            readonly type: "boolean";
                        }];
                    };
                    readonly overlay: {
                        readonly description: "URL to overlay video to add on the animated result";
                        readonly type: "string";
                        readonly pattern: "(https|s3):.*\\.(?:mp4|mov|mpeg)";
                        readonly examples: readonly ["https://path.to.directory/movie.mp4"];
                    };
                    readonly mute: {
                        readonly type: "boolean";
                        readonly description: "mutes the driver sound in the animated video result, defaults to true";
                    };
                    readonly stitch: {
                        readonly type: "boolean";
                        readonly description: "stitch back the animated result to the original image";
                    };
                    readonly max_animated_faces: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly description: "the amount of faces to animate when stitch: true. Defaults to 5";
                        readonly minimum: 1;
                        readonly maximum: 5;
                    };
                    readonly result_format: {
                        readonly description: "the file format of the animated video result";
                        readonly type: "string";
                        readonly enum: readonly ["mp4", "gif", "mov"];
                    };
                };
                readonly type: "object";
                readonly additionalProperties: true;
            };
            readonly user_data: {
                readonly description: "Non-sensitive custom data that will be added to the animation response and webhook.";
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 500;
                readonly pattern: "^(?!\\s*$).+$";
            };
        };
        readonly required: readonly ["source_url"];
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the animation";
                };
                readonly object: {
                    readonly type: "string";
                    readonly description: "An identifier of this animation";
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly description: "The user id of the user that created the animation";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Animation creation time as iso-8601 string";
                };
                readonly status: {
                    readonly description: "The status of the animation\n\n`created` `done` `error` `started`";
                    readonly enum: readonly ["created", "done", "error", "started"];
                    readonly type: "string";
                };
            };
            readonly required: readonly ["id", "object", "created_by", "created_at", "status"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteAnimation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object";
                };
                readonly user_id: {
                    readonly type: "string";
                    readonly description: "Unique identifier of the user that submitted the animation";
                };
                readonly source_url: {
                    readonly type: "string";
                    readonly description: "The URL of the source image to be animated by the driver video. Image type of .jpg | .png";
                };
                readonly driver_url: {
                    readonly type: "string";
                    readonly description: "The URL of the driver video to drive the animation, if not provided a driver video will be selected for you from the predefined DriversBank";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Animation creation time as iso-8601 string";
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly description: "The user id of the user that created the animation";
                };
                readonly started_at: {
                    readonly type: "string";
                    readonly description: "Animation start time as iso-8601 string";
                };
                readonly modified_at: {
                    readonly type: "string";
                    readonly description: "last modified time as iso-8601 string";
                };
                readonly status: {
                    readonly description: "The status of the animation\n\n`created` `done` `error` `started`";
                    readonly enum: readonly ["created", "done", "error", "started"];
                    readonly type: "string";
                };
                readonly result_url: {
                    readonly type: "string";
                    readonly description: "s3 uri to the resulting video";
                };
                readonly metadata: {
                    readonly description: "metadata that has been collected through the process";
                    readonly properties: {};
                    readonly type: "object";
                };
                readonly error: {
                    readonly description: "The error that failed the animation";
                    readonly anyOf: readonly [{
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "DriverError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Driver provided is invalid or cannot be loaded";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "LogoError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Could not load logo image or invalid format or position";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "SourceError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Could not load source image or invalid format";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "FaceError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "face not detected";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "VideoEnhanceError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Failed to create enhanced video (logo, subsample)";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "UnknownError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Unknown internal error";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }];
                };
                readonly webhook: {
                    readonly type: "string";
                    readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                };
                readonly config: {
                    readonly description: "The configuration that used to process the animation";
                    readonly properties: {
                        readonly logo: {
                            readonly anyOf: readonly [{
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                        readonly pattern: "((https|s3):\\/\\/.+)";
                                    };
                                    readonly position: {
                                        readonly items: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly type: "array";
                                        readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                        readonly minItems: 2;
                                        readonly maxItems: 2;
                                        readonly examples: readonly [0, 500];
                                    };
                                };
                                readonly required: readonly ["url", "position"];
                                readonly type: "object";
                                readonly additionalProperties: true;
                            }, {
                                readonly type: "boolean";
                            }];
                        };
                        readonly overlay: {
                            readonly description: "URL to overlay video to add on the animated result";
                            readonly type: "string";
                            readonly pattern: "(https|s3):.*\\.(?:mp4|mov|mpeg)";
                            readonly examples: readonly ["https://path.to.directory/movie.mp4"];
                        };
                        readonly mute: {
                            readonly type: "boolean";
                            readonly description: "mutes the driver sound in the animated video result, defaults to true";
                        };
                        readonly stitch: {
                            readonly type: "boolean";
                            readonly description: "stitch back the animated result to the original image";
                        };
                        readonly max_animated_faces: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "the amount of faces to animate when stitch: true. Defaults to 5";
                            readonly minimum: 1;
                            readonly maximum: 5;
                        };
                        readonly result_format: {
                            readonly description: "the file format of the animated video result\n\n`mp4` `gif` `mov`";
                            readonly type: "string";
                            readonly enum: readonly ["mp4", "gif", "mov"];
                        };
                    };
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly required: readonly ["id", "user_id", "source_url", "created_at", "modified_at", "status"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteClip: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object";
                };
                readonly owner_id: {
                    readonly type: "string";
                    readonly description: "Unique identifier of the owner that submitted the clip";
                };
                readonly audio_url: {
                    readonly description: "The URL of the audio file which will be used by the actor";
                    readonly type: "string";
                    readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                    readonly examples: readonly ["https://path.to/audio.mp3"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Clip creation time as iso-8601 string";
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly description: "The user id that created the clip";
                };
                readonly modified_at: {
                    readonly type: "string";
                    readonly description: "last modified time as iso-8601 string";
                };
                readonly started_at: {
                    readonly type: "string";
                    readonly description: "Clip start time as iso-8601 string";
                };
                readonly completed_at: {
                    readonly type: "string";
                    readonly description: "Clip completion time as iso-8601 string";
                };
                readonly config: {
                    readonly description: "The configuration that used to process the clip";
                    readonly properties: {
                        readonly logo: {
                            readonly anyOf: readonly [{
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                        readonly pattern: "((https|s3):\\/\\/.+)";
                                    };
                                    readonly position: {
                                        readonly items: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly type: "array";
                                        readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                        readonly minItems: 2;
                                        readonly maxItems: 2;
                                        readonly examples: readonly [0, 500];
                                    };
                                };
                                readonly required: readonly ["url", "position"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly type: "boolean";
                            }];
                        };
                        readonly result_format: {
                            readonly type: "string";
                            readonly enum: readonly ["mp4", "gif", "mov", "webm"];
                            readonly description: "File format of the animated result\n\n`mp4` `gif` `mov` `webm`";
                            readonly default: "mp4";
                        };
                    };
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly status: {
                    readonly description: "The status of the clip\n\n`created` `done` `error` `started` `rejected`";
                    readonly enum: readonly ["created", "done", "error", "started", "rejected"];
                    readonly type: "string";
                };
                readonly result_url: {
                    readonly type: "string";
                    readonly description: "The result url of the clip";
                };
                readonly presenter_id: {
                    readonly type: "string";
                    readonly description: "The identity of the actor that is used in the clip";
                };
                readonly driver_id: {
                    readonly type: "string";
                    readonly description: "The identifier of the presenter's acting driver that is used in the clip";
                };
                readonly metadata: {
                    readonly description: "metadata that has been collected through the process";
                    readonly properties: {};
                    readonly type: "object";
                };
                readonly webhook: {
                    readonly type: "string";
                    readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "The name of the clip";
                };
            };
            readonly required: readonly ["id", "owner_id", "created_at", "modified_at", "status"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteStream: {
    readonly body: {
        readonly properties: {
            readonly session_id: {
                readonly type: "string";
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the stream identifier";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly cookie: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["status"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteStream1: {
    readonly body: {
        readonly properties: {
            readonly session_id: {
                readonly type: "string";
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the stream identifier";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["status"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteTalk: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object";
                };
                readonly user_id: {
                    readonly type: "string";
                    readonly description: "Unique identifier of the user that submitted the talk";
                };
                readonly source_url: {
                    readonly type: "string";
                    readonly description: "The URL of the source image to be animated by the driver video. Image type of .jpg | .png";
                };
                readonly driver_url: {
                    readonly type: "string";
                    readonly description: "The URL of the driver video to drive the talk, if not provided a driver video will be selected for you from the predefined DriversBank";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Talk creation time as iso-8601 string";
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly description: "The user id of the user that created the talk";
                };
                readonly audio_url: {
                    readonly description: "The URL of the audio file which will be used by the actor";
                    readonly type: "string";
                    readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                    readonly examples: readonly ["https://path.to/audio.mp3"];
                };
                readonly started_at: {
                    readonly type: "string";
                    readonly description: "Talk start time as iso-8601 string";
                };
                readonly modified_at: {
                    readonly type: "string";
                    readonly description: "last modified time as iso-8601 string";
                };
                readonly status: {
                    readonly description: "The status of the talk\n\n`created` `done` `error` `started` `rejected`";
                    readonly enum: readonly ["created", "done", "error", "started", "rejected"];
                    readonly type: "string";
                };
                readonly result_url: {
                    readonly type: "string";
                    readonly description: "s3 uri to the resulting video";
                };
                readonly metadata: {
                    readonly description: "metadata that has been collected through the process";
                    readonly properties: {};
                    readonly type: "object";
                };
                readonly webhook: {
                    readonly type: "string";
                    readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                };
                readonly config: {
                    readonly description: "The configuration that used to process the talk";
                    readonly properties: {
                        readonly logo: {
                            readonly anyOf: readonly [{
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                        readonly pattern: "((https|s3):\\/\\/.+)";
                                    };
                                    readonly position: {
                                        readonly items: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly type: "array";
                                        readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                        readonly minItems: 2;
                                        readonly maxItems: 2;
                                        readonly examples: readonly [0, 500];
                                    };
                                };
                                readonly required: readonly ["url", "position"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly type: "boolean";
                            }];
                        };
                        readonly align_driver: {
                            readonly type: "boolean";
                            readonly description: "Auto crops the driver face, ignored if using drivers bank";
                        };
                        readonly align_expand_factor: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "The amount of expansion % used for face cropping";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly auto_match: {
                            readonly type: "boolean";
                            readonly description: "Finds the best anchor match for the source in driver video";
                        };
                        readonly motion_factor: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "Amplifies or damps the animation movements";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly normalization_factor: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "Normalizes the expression of the source image [0., 1.], 0. means no normalization";
                            readonly minimum: 0;
                            readonly maximum: 1;
                        };
                        readonly sharpen: {
                            readonly type: "boolean";
                            readonly description: "Sharpen results.";
                        };
                        readonly stitch: {
                            readonly type: "boolean";
                            readonly description: "Stitch back the animated result to the original image";
                        };
                        readonly result_format: {
                            readonly description: "File format of the animated result\n\n`mp4` `gif` `mov`";
                            readonly type: "string";
                            readonly enum: readonly ["mp4", "gif", "mov"];
                        };
                        readonly fluent: {
                            readonly type: "boolean";
                            readonly description: "Interpolate between the last & first frames of the driver video\nWhen used together with `pad_audio` can create a seamless transition between videos of the same driver";
                            readonly default: "false";
                        };
                        readonly pad_audio: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "Pad the audio with silence at the end (given in seconds)\nWill increase the video duration & the credits it consumes";
                            readonly default: "0.0";
                            readonly minimum: 0;
                            readonly maximum: 60;
                        };
                        readonly driver_expressions: {
                            readonly description: "timed expressions for animation, the current expression is not cleared until a new expression is defined.\nPossible expressions include `happy`, `neutral` and more.";
                            readonly properties: {
                                readonly expressions: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly start_frame: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The frame number for the expression start point.";
                                                readonly minimum: 0;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly expression: {
                                                readonly description: "The expression to use\n\n`neutral` `happy` `serious` `surprise`";
                                                readonly enum: readonly ["neutral", "happy", "serious", "surprise"];
                                                readonly type: "string";
                                            };
                                            readonly intensity: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "Controls the intensity you want for this expression (between 0 no expression, 1 maximum)";
                                                readonly minimum: 0;
                                                readonly maximum: 1;
                                            };
                                        };
                                        readonly required: readonly ["start_frame", "expression", "intensity"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly type: "array";
                                    readonly description: "List of TimedExpression to use";
                                };
                                readonly transition_frames: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly description: "Number of frames to use for the transition between expressions";
                                    readonly minimum: 0;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly required: readonly ["expressions"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                    };
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["id", "user_id", "source_url", "created_at", "modified_at", "status"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAnimation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object";
                };
                readonly user_id: {
                    readonly type: "string";
                    readonly description: "Unique identifier of the user that submitted the animation";
                };
                readonly source_url: {
                    readonly type: "string";
                    readonly description: "The URL of the source image to be animated by the driver video. Image type of .jpg | .png";
                };
                readonly driver_url: {
                    readonly type: "string";
                    readonly description: "The URL of the driver video to drive the animation, if not provided a driver video will be selected for you from the predefined DriversBank";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Animation creation time as iso-8601 string";
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly description: "The user id of the user that created the animation";
                };
                readonly started_at: {
                    readonly type: "string";
                    readonly description: "Animation start time as iso-8601 string";
                };
                readonly modified_at: {
                    readonly type: "string";
                    readonly description: "last modified time as iso-8601 string";
                };
                readonly status: {
                    readonly description: "The status of the animation\n\n`created` `done` `error` `started`";
                    readonly enum: readonly ["created", "done", "error", "started"];
                    readonly type: "string";
                };
                readonly result_url: {
                    readonly type: "string";
                    readonly description: "s3 uri to the resulting video";
                };
                readonly metadata: {
                    readonly description: "metadata that has been collected through the process";
                    readonly properties: {};
                    readonly type: "object";
                };
                readonly error: {
                    readonly description: "The error that failed the animation";
                    readonly anyOf: readonly [{
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "DriverError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Driver provided is invalid or cannot be loaded";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "LogoError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Could not load logo image or invalid format or position";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "SourceError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Could not load source image or invalid format";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "FaceError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "face not detected";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "VideoEnhanceError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Failed to create enhanced video (logo, subsample)";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }, {
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                                readonly default: "UnknownError";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly default: "Unknown internal error";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }];
                };
                readonly webhook: {
                    readonly type: "string";
                    readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                };
                readonly config: {
                    readonly description: "The configuration that used to process the animation";
                    readonly properties: {
                        readonly logo: {
                            readonly anyOf: readonly [{
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                        readonly pattern: "((https|s3):\\/\\/.+)";
                                    };
                                    readonly position: {
                                        readonly items: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly type: "array";
                                        readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                        readonly minItems: 2;
                                        readonly maxItems: 2;
                                        readonly examples: readonly [0, 500];
                                    };
                                };
                                readonly required: readonly ["url", "position"];
                                readonly type: "object";
                                readonly additionalProperties: true;
                            }, {
                                readonly type: "boolean";
                            }];
                        };
                        readonly overlay: {
                            readonly description: "URL to overlay video to add on the animated result";
                            readonly type: "string";
                            readonly pattern: "(https|s3):.*\\.(?:mp4|mov|mpeg)";
                            readonly examples: readonly ["https://path.to.directory/movie.mp4"];
                        };
                        readonly mute: {
                            readonly type: "boolean";
                            readonly description: "mutes the driver sound in the animated video result, defaults to true";
                        };
                        readonly stitch: {
                            readonly type: "boolean";
                            readonly description: "stitch back the animated result to the original image";
                        };
                        readonly max_animated_faces: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "the amount of faces to animate when stitch: true. Defaults to 5";
                            readonly minimum: 1;
                            readonly maximum: 5;
                        };
                        readonly result_format: {
                            readonly description: "the file format of the animated video result\n\n`mp4` `gif` `mov`";
                            readonly type: "string";
                            readonly enum: readonly ["mp4", "gif", "mov"];
                        };
                    };
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly required: readonly ["id", "user_id", "source_url", "created_at", "modified_at", "status"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAnimations: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 100;
                    readonly format: "double";
                    readonly type: "number";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "pagination - the amount of animations to return";
                };
                readonly token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "pagination - the pagination token from the previous response, default = 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly animations: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Unique identifier for the object";
                            };
                            readonly user_id: {
                                readonly type: "string";
                                readonly description: "Unique identifier of the user that submitted the animation";
                            };
                            readonly source_url: {
                                readonly type: "string";
                                readonly description: "The URL of the source image to be animated by the driver video. Image type of .jpg | .png";
                            };
                            readonly driver_url: {
                                readonly type: "string";
                                readonly description: "The URL of the driver video to drive the animation, if not provided a driver video will be selected for you from the predefined DriversBank";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Animation creation time as iso-8601 string";
                            };
                            readonly created_by: {
                                readonly type: "string";
                                readonly description: "The user id of the user that created the animation";
                            };
                            readonly started_at: {
                                readonly type: "string";
                                readonly description: "Animation start time as iso-8601 string";
                            };
                            readonly modified_at: {
                                readonly type: "string";
                                readonly description: "last modified time as iso-8601 string";
                            };
                            readonly status: {
                                readonly description: "The status of the animation\n\n`created` `done` `error` `started`";
                                readonly enum: readonly ["created", "done", "error", "started"];
                                readonly type: "string";
                            };
                            readonly result_url: {
                                readonly type: "string";
                                readonly description: "s3 uri to the resulting video";
                            };
                            readonly metadata: {
                                readonly description: "metadata that has been collected through the process";
                                readonly properties: {};
                                readonly type: "object";
                            };
                            readonly error: {
                                readonly description: "The error that failed the animation";
                                readonly anyOf: readonly [{
                                    readonly properties: {
                                        readonly kind: {
                                            readonly type: "string";
                                            readonly default: "DriverError";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly default: "Driver provided is invalid or cannot be loaded";
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                }, {
                                    readonly properties: {
                                        readonly kind: {
                                            readonly type: "string";
                                            readonly default: "LogoError";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly default: "Could not load logo image or invalid format or position";
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                }, {
                                    readonly properties: {
                                        readonly kind: {
                                            readonly type: "string";
                                            readonly default: "SourceError";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly default: "Could not load source image or invalid format";
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                }, {
                                    readonly properties: {
                                        readonly kind: {
                                            readonly type: "string";
                                            readonly default: "FaceError";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly default: "face not detected";
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                }, {
                                    readonly properties: {
                                        readonly kind: {
                                            readonly type: "string";
                                            readonly default: "VideoEnhanceError";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly default: "Failed to create enhanced video (logo, subsample)";
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                }, {
                                    readonly properties: {
                                        readonly kind: {
                                            readonly type: "string";
                                            readonly default: "UnknownError";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly default: "Unknown internal error";
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                }];
                            };
                            readonly webhook: {
                                readonly type: "string";
                                readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                            };
                            readonly config: {
                                readonly description: "The configuration that used to process the animation";
                                readonly properties: {
                                    readonly logo: {
                                        readonly anyOf: readonly [{
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                                    readonly pattern: "((https|s3):\\/\\/.+)";
                                                };
                                                readonly position: {
                                                    readonly items: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly type: "array";
                                                    readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                                    readonly minItems: 2;
                                                    readonly maxItems: 2;
                                                    readonly examples: readonly [0, 500];
                                                };
                                            };
                                            readonly required: readonly ["url", "position"];
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                    };
                                    readonly overlay: {
                                        readonly description: "URL to overlay video to add on the animated result";
                                        readonly type: "string";
                                        readonly pattern: "(https|s3):.*\\.(?:mp4|mov|mpeg)";
                                        readonly examples: readonly ["https://path.to.directory/movie.mp4"];
                                    };
                                    readonly mute: {
                                        readonly type: "boolean";
                                        readonly description: "mutes the driver sound in the animated video result, defaults to true";
                                    };
                                    readonly stitch: {
                                        readonly type: "boolean";
                                        readonly description: "stitch back the animated result to the original image";
                                    };
                                    readonly max_animated_faces: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "the amount of faces to animate when stitch: true. Defaults to 5";
                                        readonly minimum: 1;
                                        readonly maximum: 5;
                                    };
                                    readonly result_format: {
                                        readonly description: "the file format of the animated video result\n\n`mp4` `gif` `mov`";
                                        readonly type: "string";
                                        readonly enum: readonly ["mp4", "gif", "mov"];
                                    };
                                };
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly required: readonly ["id", "user_id", "source_url", "created_at", "modified_at", "status"];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly type: "array";
                };
                readonly token: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["animations"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetClip: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object";
                };
                readonly owner_id: {
                    readonly type: "string";
                    readonly description: "Unique identifier of the owner that submitted the clip";
                };
                readonly audio_url: {
                    readonly description: "The URL of the audio file which will be used by the actor";
                    readonly type: "string";
                    readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                    readonly examples: readonly ["https://path.to/audio.mp3"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Clip creation time as iso-8601 string";
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly description: "The user id that created the clip";
                };
                readonly modified_at: {
                    readonly type: "string";
                    readonly description: "last modified time as iso-8601 string";
                };
                readonly started_at: {
                    readonly type: "string";
                    readonly description: "Clip start time as iso-8601 string";
                };
                readonly completed_at: {
                    readonly type: "string";
                    readonly description: "Clip completion time as iso-8601 string";
                };
                readonly config: {
                    readonly description: "The configuration that used to process the clip";
                    readonly properties: {
                        readonly logo: {
                            readonly anyOf: readonly [{
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                        readonly pattern: "((https|s3):\\/\\/.+)";
                                    };
                                    readonly position: {
                                        readonly items: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly type: "array";
                                        readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                        readonly minItems: 2;
                                        readonly maxItems: 2;
                                        readonly examples: readonly [0, 500];
                                    };
                                };
                                readonly required: readonly ["url", "position"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly type: "boolean";
                            }];
                        };
                        readonly result_format: {
                            readonly type: "string";
                            readonly enum: readonly ["mp4", "gif", "mov", "webm"];
                            readonly description: "File format of the animated result\n\n`mp4` `gif` `mov` `webm`";
                            readonly default: "mp4";
                        };
                    };
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly status: {
                    readonly description: "The status of the clip\n\n`created` `done` `error` `started` `rejected`";
                    readonly enum: readonly ["created", "done", "error", "started", "rejected"];
                    readonly type: "string";
                };
                readonly result_url: {
                    readonly type: "string";
                    readonly description: "The result url of the clip";
                };
                readonly presenter_id: {
                    readonly type: "string";
                    readonly description: "The identity of the actor that is used in the clip";
                };
                readonly driver_id: {
                    readonly type: "string";
                    readonly description: "The identifier of the presenter's acting driver that is used in the clip";
                };
                readonly metadata: {
                    readonly description: "metadata that has been collected through the process";
                    readonly properties: {};
                    readonly type: "object";
                };
                readonly webhook: {
                    readonly type: "string";
                    readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "The name of the clip";
                };
            };
            readonly required: readonly ["id", "owner_id", "created_at", "modified_at", "status"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetClips: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 100;
                    readonly format: "double";
                    readonly type: "number";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "pagination - the amount of clips to return";
                };
                readonly token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "pagination - the pagination token from the previous response, default = 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly clips: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Unique identifier for the object";
                            };
                            readonly owner_id: {
                                readonly type: "string";
                                readonly description: "Unique identifier of the owner that submitted the clip";
                            };
                            readonly audio_url: {
                                readonly description: "The URL of the audio file which will be used by the actor";
                                readonly type: "string";
                                readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                                readonly examples: readonly ["https://path.to/audio.mp3"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Clip creation time as iso-8601 string";
                            };
                            readonly created_by: {
                                readonly type: "string";
                                readonly description: "The user id that created the clip";
                            };
                            readonly modified_at: {
                                readonly type: "string";
                                readonly description: "last modified time as iso-8601 string";
                            };
                            readonly started_at: {
                                readonly type: "string";
                                readonly description: "Clip start time as iso-8601 string";
                            };
                            readonly completed_at: {
                                readonly type: "string";
                                readonly description: "Clip completion time as iso-8601 string";
                            };
                            readonly config: {
                                readonly description: "The configuration that used to process the clip";
                                readonly properties: {
                                    readonly logo: {
                                        readonly anyOf: readonly [{
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                                    readonly pattern: "((https|s3):\\/\\/.+)";
                                                };
                                                readonly position: {
                                                    readonly items: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly type: "array";
                                                    readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                                    readonly minItems: 2;
                                                    readonly maxItems: 2;
                                                    readonly examples: readonly [0, 500];
                                                };
                                            };
                                            readonly required: readonly ["url", "position"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                    };
                                    readonly result_format: {
                                        readonly type: "string";
                                        readonly enum: readonly ["mp4", "gif", "mov", "webm"];
                                        readonly description: "File format of the animated result\n\n`mp4` `gif` `mov` `webm`";
                                        readonly default: "mp4";
                                    };
                                };
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly status: {
                                readonly description: "The status of the clip\n\n`created` `done` `error` `started` `rejected`";
                                readonly enum: readonly ["created", "done", "error", "started", "rejected"];
                                readonly type: "string";
                            };
                            readonly result_url: {
                                readonly type: "string";
                                readonly description: "The result url of the clip";
                            };
                            readonly presenter_id: {
                                readonly type: "string";
                                readonly description: "The identity of the actor that is used in the clip";
                            };
                            readonly driver_id: {
                                readonly type: "string";
                                readonly description: "The identifier of the presenter's acting driver that is used in the clip";
                            };
                            readonly metadata: {
                                readonly description: "metadata that has been collected through the process";
                                readonly properties: {};
                                readonly type: "object";
                            };
                            readonly webhook: {
                                readonly type: "string";
                                readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the clip";
                            };
                        };
                        readonly required: readonly ["id", "owner_id", "created_at", "modified_at", "status"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
                readonly token: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["clips"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPresenterById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly presenters: {
                    readonly items: {
                        readonly properties: {
                            readonly presenter_id: {
                                readonly type: "string";
                                readonly examples: readonly ["amy-Aq6OmGZnMt"];
                            };
                            readonly driver_id: {
                                readonly type: "string";
                                readonly examples: readonly ["Vcq0R4a8F0"];
                            };
                            readonly gender: {
                                readonly type: "string";
                                readonly description: "The gender of the presenter.\nmale / female / other";
                            };
                            readonly owner_id: {
                                readonly type: "string";
                                readonly description: "The owner id of the driver";
                            };
                            readonly preview_url: {
                                readonly type: "string";
                                readonly description: "A short gif, trimmed from the original driver in low resolution";
                            };
                            readonly modified_at: {
                                readonly type: "string";
                                readonly description: "Presenter modified at";
                            };
                            readonly video_url: {
                                readonly type: "string";
                                readonly description: "A short video, trimmed from the original driver in high resolution";
                            };
                            readonly thumbnail_url: {
                                readonly type: "string";
                            };
                            readonly image_url: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["presenter_id", "gender", "owner_id", "preview_url", "modified_at"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
                readonly token: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["presenters"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPresenterDriversById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly clips_drivers: {
                    readonly items: {
                        readonly properties: {
                            readonly presenter_id: {
                                readonly type: "string";
                                readonly examples: readonly ["amy-Aq6OmGZnMt"];
                            };
                            readonly driver_id: {
                                readonly type: "string";
                                readonly examples: readonly ["Vcq0R4a8F0"];
                            };
                            readonly gender: {
                                readonly type: "string";
                                readonly description: "The gender of the presenter.\nmale / female / other";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Creation time as iso-8601 string";
                            };
                            readonly owner_id: {
                                readonly type: "string";
                                readonly description: "The owner id of the driver";
                            };
                            readonly modified_at: {
                                readonly type: "string";
                                readonly description: "Last modified time as iso-8601 string";
                            };
                            readonly width: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly description: "The video width in pixels";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly height: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly description: "The video height in pixels";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly driver_image_url: {
                                readonly type: "string";
                                readonly description: "High resolution image of the driver image";
                            };
                            readonly thumbnail_url: {
                                readonly type: "string";
                                readonly description: "A low resolution image representing the presenter in the video";
                            };
                            readonly video_url: {
                                readonly type: "string";
                                readonly description: "A short video, trimmed from the original driver in high resolution";
                            };
                            readonly preview_url: {
                                readonly type: "string";
                                readonly description: "A short gif, trimmed from the original driver in low resolution";
                            };
                            readonly chroma_key: {
                                readonly type: "string";
                            };
                            readonly chroma_key_similarity: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "A user friendly name for the driver";
                                readonly examples: readonly ["Amy"];
                            };
                        };
                        readonly required: readonly ["presenter_id", "driver_id", "gender", "created_at", "owner_id", "modified_at", "width", "height", "driver_image_url", "thumbnail_url", "video_url", "preview_url"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
                readonly token: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["clips_drivers"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPresenters: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 100;
                    readonly format: "double";
                    readonly type: "number";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "pagination - the amount of presenters to return";
                };
                readonly token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "pagination - the pagination token from the previous response, default = 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly presenters: {
                    readonly items: {
                        readonly properties: {
                            readonly presenter_id: {
                                readonly type: "string";
                                readonly examples: readonly ["amy-Aq6OmGZnMt"];
                            };
                            readonly driver_id: {
                                readonly type: "string";
                                readonly examples: readonly ["Vcq0R4a8F0"];
                            };
                            readonly gender: {
                                readonly type: "string";
                                readonly description: "The gender of the presenter.\nmale / female / other";
                            };
                            readonly owner_id: {
                                readonly type: "string";
                                readonly description: "The owner id of the driver";
                            };
                            readonly preview_url: {
                                readonly type: "string";
                                readonly description: "A short gif, trimmed from the original driver in low resolution";
                            };
                            readonly modified_at: {
                                readonly type: "string";
                                readonly description: "Presenter modified at";
                            };
                            readonly video_url: {
                                readonly type: "string";
                                readonly description: "A short video, trimmed from the original driver in high resolution";
                            };
                            readonly thumbnail_url: {
                                readonly type: "string";
                            };
                            readonly image_url: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["presenter_id", "gender", "owner_id", "preview_url", "modified_at"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
                readonly token: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["presenters"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTalk: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for the object";
                };
                readonly user_id: {
                    readonly type: "string";
                    readonly description: "Unique identifier of the user that submitted the talk";
                };
                readonly source_url: {
                    readonly type: "string";
                    readonly description: "The URL of the source image to be animated by the driver video. Image type of .jpg | .png";
                };
                readonly driver_url: {
                    readonly type: "string";
                    readonly description: "The URL of the driver video to drive the talk, if not provided a driver video will be selected for you from the predefined DriversBank";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Talk creation time as iso-8601 string";
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly description: "The user id of the user that created the talk";
                };
                readonly audio_url: {
                    readonly description: "The URL of the audio file which will be used by the actor";
                    readonly type: "string";
                    readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                    readonly examples: readonly ["https://path.to/audio.mp3"];
                };
                readonly started_at: {
                    readonly type: "string";
                    readonly description: "Talk start time as iso-8601 string";
                };
                readonly modified_at: {
                    readonly type: "string";
                    readonly description: "last modified time as iso-8601 string";
                };
                readonly status: {
                    readonly description: "The status of the talk\n\n`created` `done` `error` `started` `rejected`";
                    readonly enum: readonly ["created", "done", "error", "started", "rejected"];
                    readonly type: "string";
                };
                readonly result_url: {
                    readonly type: "string";
                    readonly description: "s3 uri to the resulting video";
                };
                readonly metadata: {
                    readonly description: "metadata that has been collected through the process";
                    readonly properties: {};
                    readonly type: "object";
                };
                readonly webhook: {
                    readonly type: "string";
                    readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                };
                readonly config: {
                    readonly description: "The configuration that used to process the talk";
                    readonly properties: {
                        readonly logo: {
                            readonly anyOf: readonly [{
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                        readonly pattern: "((https|s3):\\/\\/.+)";
                                    };
                                    readonly position: {
                                        readonly items: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly type: "array";
                                        readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                        readonly minItems: 2;
                                        readonly maxItems: 2;
                                        readonly examples: readonly [0, 500];
                                    };
                                };
                                readonly required: readonly ["url", "position"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            }, {
                                readonly type: "boolean";
                            }];
                        };
                        readonly align_driver: {
                            readonly type: "boolean";
                            readonly description: "Auto crops the driver face, ignored if using drivers bank";
                        };
                        readonly align_expand_factor: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "The amount of expansion % used for face cropping";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly auto_match: {
                            readonly type: "boolean";
                            readonly description: "Finds the best anchor match for the source in driver video";
                        };
                        readonly motion_factor: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "Amplifies or damps the animation movements";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly normalization_factor: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "Normalizes the expression of the source image [0., 1.], 0. means no normalization";
                            readonly minimum: 0;
                            readonly maximum: 1;
                        };
                        readonly sharpen: {
                            readonly type: "boolean";
                            readonly description: "Sharpen results.";
                        };
                        readonly stitch: {
                            readonly type: "boolean";
                            readonly description: "Stitch back the animated result to the original image";
                        };
                        readonly result_format: {
                            readonly description: "File format of the animated result\n\n`mp4` `gif` `mov`";
                            readonly type: "string";
                            readonly enum: readonly ["mp4", "gif", "mov"];
                        };
                        readonly fluent: {
                            readonly type: "boolean";
                            readonly description: "Interpolate between the last & first frames of the driver video\nWhen used together with `pad_audio` can create a seamless transition between videos of the same driver";
                            readonly default: "false";
                        };
                        readonly pad_audio: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly description: "Pad the audio with silence at the end (given in seconds)\nWill increase the video duration & the credits it consumes";
                            readonly default: "0.0";
                            readonly minimum: 0;
                            readonly maximum: 60;
                        };
                        readonly driver_expressions: {
                            readonly description: "timed expressions for animation, the current expression is not cleared until a new expression is defined.\nPossible expressions include `happy`, `neutral` and more.";
                            readonly properties: {
                                readonly expressions: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly start_frame: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The frame number for the expression start point.";
                                                readonly minimum: 0;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly expression: {
                                                readonly description: "The expression to use\n\n`neutral` `happy` `serious` `surprise`";
                                                readonly enum: readonly ["neutral", "happy", "serious", "surprise"];
                                                readonly type: "string";
                                            };
                                            readonly intensity: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "Controls the intensity you want for this expression (between 0 no expression, 1 maximum)";
                                                readonly minimum: 0;
                                                readonly maximum: 1;
                                            };
                                        };
                                        readonly required: readonly ["start_frame", "expression", "intensity"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly type: "array";
                                    readonly description: "List of TimedExpression to use";
                                };
                                readonly transition_frames: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly description: "Number of frames to use for the transition between expressions";
                                    readonly minimum: 0;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly required: readonly ["expressions"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                    };
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["id", "user_id", "source_url", "created_at", "modified_at", "status"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTalks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 100;
                    readonly format: "double";
                    readonly type: "number";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "pagination - the amount of talks to return";
                };
                readonly token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "pagination - the pagination token from the previous response, default = 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly talks: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Unique identifier for the object";
                            };
                            readonly user_id: {
                                readonly type: "string";
                                readonly description: "Unique identifier of the user that submitted the talk";
                            };
                            readonly source_url: {
                                readonly type: "string";
                                readonly description: "The URL of the source image to be animated by the driver video. Image type of .jpg | .png";
                            };
                            readonly driver_url: {
                                readonly type: "string";
                                readonly description: "The URL of the driver video to drive the talk, if not provided a driver video will be selected for you from the predefined DriversBank";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Talk creation time as iso-8601 string";
                            };
                            readonly created_by: {
                                readonly type: "string";
                                readonly description: "The user id of the user that created the talk";
                            };
                            readonly audio_url: {
                                readonly description: "The URL of the audio file which will be used by the actor";
                                readonly type: "string";
                                readonly pattern: "^(?:https):\\/\\/[\\S]+$";
                                readonly examples: readonly ["https://path.to/audio.mp3"];
                            };
                            readonly started_at: {
                                readonly type: "string";
                                readonly description: "Talk start time as iso-8601 string";
                            };
                            readonly modified_at: {
                                readonly type: "string";
                                readonly description: "last modified time as iso-8601 string";
                            };
                            readonly status: {
                                readonly description: "The status of the talk\n\n`created` `done` `error` `started` `rejected`";
                                readonly enum: readonly ["created", "done", "error", "started", "rejected"];
                                readonly type: "string";
                            };
                            readonly result_url: {
                                readonly type: "string";
                                readonly description: "s3 uri to the resulting video";
                            };
                            readonly metadata: {
                                readonly description: "metadata that has been collected through the process";
                                readonly properties: {};
                                readonly type: "object";
                            };
                            readonly webhook: {
                                readonly type: "string";
                                readonly description: "A webhook URL for sending the payload including animate details. In a case of empty value, the webhook will not be triggered";
                            };
                            readonly config: {
                                readonly description: "The configuration that used to process the talk";
                                readonly properties: {
                                    readonly logo: {
                                        readonly anyOf: readonly [{
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "https url to an ARGB jpg/png image, a default logo is used otherwise";
                                                    readonly pattern: "((https|s3):\\/\\/.+)";
                                                };
                                                readonly position: {
                                                    readonly items: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly type: "array";
                                                    readonly description: "position of the logo in pixels from the top left corner (w,h) negative values are subtracted from last pixel";
                                                    readonly minItems: 2;
                                                    readonly maxItems: 2;
                                                    readonly examples: readonly [0, 500];
                                                };
                                            };
                                            readonly required: readonly ["url", "position"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                    };
                                    readonly align_driver: {
                                        readonly type: "boolean";
                                        readonly description: "Auto crops the driver face, ignored if using drivers bank";
                                    };
                                    readonly align_expand_factor: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The amount of expansion % used for face cropping";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly auto_match: {
                                        readonly type: "boolean";
                                        readonly description: "Finds the best anchor match for the source in driver video";
                                    };
                                    readonly motion_factor: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "Amplifies or damps the animation movements";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly normalization_factor: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "Normalizes the expression of the source image [0., 1.], 0. means no normalization";
                                        readonly minimum: 0;
                                        readonly maximum: 1;
                                    };
                                    readonly sharpen: {
                                        readonly type: "boolean";
                                        readonly description: "Sharpen results.";
                                    };
                                    readonly stitch: {
                                        readonly type: "boolean";
                                        readonly description: "Stitch back the animated result to the original image";
                                    };
                                    readonly result_format: {
                                        readonly description: "File format of the animated result\n\n`mp4` `gif` `mov`";
                                        readonly type: "string";
                                        readonly enum: readonly ["mp4", "gif", "mov"];
                                    };
                                    readonly fluent: {
                                        readonly type: "boolean";
                                        readonly description: "Interpolate between the last & first frames of the driver video\nWhen used together with `pad_audio` can create a seamless transition between videos of the same driver";
                                        readonly default: "false";
                                    };
                                    readonly pad_audio: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "Pad the audio with silence at the end (given in seconds)\nWill increase the video duration & the credits it consumes";
                                        readonly default: "0.0";
                                        readonly minimum: 0;
                                        readonly maximum: 60;
                                    };
                                    readonly driver_expressions: {
                                        readonly description: "timed expressions for animation, the current expression is not cleared until a new expression is defined.\nPossible expressions include `happy`, `neutral` and more.";
                                        readonly properties: {
                                            readonly expressions: {
                                                readonly items: {
                                                    readonly properties: {
                                                        readonly start_frame: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly description: "The frame number for the expression start point.";
                                                            readonly minimum: 0;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly expression: {
                                                            readonly description: "The expression to use\n\n`neutral` `happy` `serious` `surprise`";
                                                            readonly enum: readonly ["neutral", "happy", "serious", "surprise"];
                                                            readonly type: "string";
                                                        };
                                                        readonly intensity: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly description: "Controls the intensity you want for this expression (between 0 no expression, 1 maximum)";
                                                            readonly minimum: 0;
                                                            readonly maximum: 1;
                                                        };
                                                    };
                                                    readonly required: readonly ["start_frame", "expression", "intensity"];
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly type: "array";
                                                readonly description: "List of TimedExpression to use";
                                            };
                                            readonly transition_frames: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "Number of frames to use for the transition between expressions";
                                                readonly minimum: 0;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly required: readonly ["expressions"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["id", "user_id", "source_url", "created_at", "modified_at", "status"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
                readonly token: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["talks"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const StartConnection: {
    readonly body: {
        readonly properties: {
            readonly session_id: {
                readonly type: "string";
                readonly description: "Session identifier information, should be returned in the body of all streaming requests (from the response\nof the POST /streams)";
            };
            readonly answer: {
                readonly description: "Jsep answer object used to create a peer connection";
                readonly properties: {
                    readonly type: {
                        readonly type: readonly ["string", "null"];
                        readonly enum: readonly ["answer"];
                        readonly description: "The SDP contained in the sdp property is the definitive choice in the exchange. In other words, this session\ndescription describes the agreed-upon configuration, and is being sent to finalize negotiation.";
                    };
                    readonly sdp: {
                        readonly type: "string";
                        readonly description: "Describe the media communication sessions to accept the session the is being negotiated";
                    };
                };
                readonly required: readonly ["type", "sdp"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
        };
        readonly required: readonly ["answer"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the stream identifier";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly cookie: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["status"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const StartConnection1: {
    readonly body: {
        readonly properties: {
            readonly session_id: {
                readonly type: "string";
                readonly description: "Session identifier information, should be returned in the body of all streaming requests (from the response\nof the POST /streams)";
            };
            readonly answer: {
                readonly description: "Jsep answer object used to create a peer connection";
                readonly properties: {
                    readonly type: {
                        readonly type: readonly ["string", "null"];
                        readonly enum: readonly ["answer"];
                        readonly description: "The SDP contained in the sdp property is the definitive choice in the exchange. In other words, this session\ndescription describes the agreed-upon configuration, and is being sent to finalize negotiation.";
                    };
                    readonly sdp: {
                        readonly type: "string";
                        readonly description: "Describe the media communication sessions to accept the session the is being negotiated";
                    };
                };
                readonly required: readonly ["type", "sdp"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
        };
        readonly required: readonly ["answer"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the stream identifier";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["status"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AddIceCandidate, AddIceCandidate1, CreateAnimation, CreateClip, CreateClipStream, CreateStream, CreateStream1, CreateTalk, CreateTalkStream, CreateTask, DeleteAnimation, DeleteClip, DeleteStream, DeleteStream1, DeleteTalk, GetAnimation, GetAnimations, GetClip, GetClips, GetPresenterById, GetPresenterDriversById, GetPresenters, GetTalk, GetTalks, StartConnection, StartConnection1 };
