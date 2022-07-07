import { useReducer } from "react";
import {v4 as uuidv4} from "uuid";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'P:Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore dolorem hic, delectus molestiae dicta consequuntur odio accusamus odit, officiis minima doloremque sunt facere eius laudantium eligendi ipsum mollitia voluptatem.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'IP:Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore dolorem hic, delectus molestiae dicta consequuntur odio accusamus odit, officiis minima doloremque sunt facere eius laudantium eligendi ipsum mollitia voluptatem.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      _id: uuidv4(),
      description: 'F:Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore dolorem hic, delectus molestiae dicta consequuntur odio accusamus odit, officiis minima doloremque sunt facere eius laudantium eligendi ipsum mollitia voluptatem.',
      status: 'finished',
      createdAt: Date.now() - 100000000
    },
  ],
};

export const EntriesProvider: React.FunctionComponent<Props> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string)  => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending"
    }

    dispatch({type: 'Entry - Add Entry', payload: newEntry});
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
