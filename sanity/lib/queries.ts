import {defineQuery} from "groq";

export const STARTUP_QUERY = defineQuery(`*[_type == 'startup' && defined(slug.current) && (!defined($search) || title match $search || category match $search || author -> name match $search)  ] {_createdAt, _id, title, category, views, image, description, _type, author -> {name, bio, id, image}}`)