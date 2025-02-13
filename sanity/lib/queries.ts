import {defineQuery} from "groq";

export const STARTUP_QUERY = defineQuery(`*[_type == 'startup'] {_createdAt, _id, title, category, views, image, description, author -> {name, bio, id, image}}`)