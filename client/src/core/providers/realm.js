import Realm from 'realm';
import { QueueSchema, ActionSchema } from 'offline/store/schema';
import { ActivitiesListSchema, ActivitiesSchema } from 'pages/Diary/Activities/store/schema';
import {
  LaborsSchema, LaborsListSchema, SugestionSchema, SugestionsListSchema,
} from 'pages/Diary/Labors/store/schema';
import {
  EquipamentsSchema, EquipamentsListSchema, SugestionEquipamentsSchema,
  SugestionsEquipamentsListSchema,
} from 'pages/Diary/Equipaments/store/schema';
import {
  InstructionsListSchema,
  InstructionSchema,
} from 'pages/Diary/Instructions/store/schema';
import { WeathersSchema, WeathersListSchema } from 'pages/Diary/Weathers/store/schema';
import { CalendarsListSchema } from 'pages/Calendar/store/schema';
import { ContractsSchema, ContractsListSchema } from 'pages/Main/store/schema';
import { GalleryListSchema, ImageSchema } from 'pages/Gallery/store/schema';
import { DetailsSchema } from 'pages/Details/store/schema';
import { UsersSchema } from 'pages/Login/store/schema';
import { ThemeSchema } from 'pages/Drawer/store/schema';

export default function getRealm() {
  return Realm.open({
    path: 'diarioObrasApp.realm',
    schema: [
      ActionSchema,
      ActivitiesListSchema,
      ActivitiesSchema,
      CalendarsListSchema,
      InstructionsListSchema,
      InstructionSchema,
      ContractsSchema,
      ContractsListSchema,
      LaborsSchema,
      LaborsListSchema,
      QueueSchema,
      SugestionSchema,
      SugestionsListSchema,
      EquipamentsSchema,
      EquipamentsListSchema,
      DetailsSchema,
      SugestionEquipamentsSchema,
      SugestionsEquipamentsListSchema,
      WeathersSchema,
      WeathersListSchema,
      GalleryListSchema,
      ImageSchema,
      UsersSchema,
      ThemeSchema,
    ],
    schemaVersion: 0,
  });
}
