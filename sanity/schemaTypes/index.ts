import { type SchemaTypeDefinition } from 'sanity'
import {eventType} from "@/sanity/schemaTypes/eventType";
import {venueType} from "@/sanity/schemaTypes/venueType";
import {artistType} from "@/sanity/schemaTypes/artistType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, venueType, artistType],
}
