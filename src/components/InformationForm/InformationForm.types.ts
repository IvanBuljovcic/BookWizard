// Generated with util/create-component.js
import { History } from 'history';
import { RouteComponentProps } from 'react-router';

export interface IAuthor {
  id: number;
  name: string;
}

export interface IPublisher {
  id: number;
  name: string;
}

export interface IInformationForm {
  genre: string;
  subgenre: string;
  isDescriptionRequired: boolean;
  history: History;
}

export type TRoutedInformationForm = RouteComponentProps & IInformationForm;
