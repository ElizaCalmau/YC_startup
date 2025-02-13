import {defineQuery} from "groq";

export const STARTUP_QUERY = defineQuery(`*[_type == 'startup'] {_id, title, image, author -> {name, bio, id}}`)