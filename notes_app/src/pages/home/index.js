import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/sidebar";
import { Fragment } from "react";
import { useEffect } from "react";
import Notes from "../../components/notes_component";
import { useNotes } from "../../contexts/notes_context";

export const Home = () => {
    const { text, title, notes,archive,deleted,notesdispatch } = useNotes();

    const onTitlechange = (e) => {
        notesdispatch({
            type: "TITLE",
            payload: e.target.value,
        });
    };

    const onTextchange = (e) => {
        notesdispatch({
            type: "TEXT",
            payload: e.target.value,
        });
    };

    const addnotes = () => {
        notesdispatch({
            type: "ADD",
        });
    };
    

    // const pinnednotes = notes.filter(({ ispinned }) => ispinned);
    // const othernotes = notes.filter(({ ispinned }) => !ispinned);
    const validNotes = notes.filter((note) => note && typeof note === "object");
const pinnednotes = validNotes.filter(({ ispinned }) => ispinned);
const othernotes = validNotes.filter(({ ispinned }) => !ispinned);
  
    return (
        <div className="h-screen flex flex-col">
            <Navbar />

            <main className="flex flex-1 h-full ">
                <Sidebar />

                {/* Main Content */}
                <div className="flex flex-col flex-1 p-4 ">
                    {/* Input Section */}
                    <div className="flex flex-col p-3 w-[500px] border-red-400 relative self-center">
                        <input
                            value={title}
                            className="border-2 border-neutral-400 rounded-t-md focus:outline-none border-b-0"
                            onChange={onTitlechange}
                            placeholder="Enter title"
                        />
                        <textarea
                            value={text}
                            className="border-2 border-neutral-400 rounded-b-md focus:outline-none border-t-0 h-24"
                            onChange={onTextchange}
                            placeholder="Enter text"
                        />
                        <button
                            disabled={title.length === 0}
                            className="absolute bottom-2 right-3"
                            onClick={addnotes}
                        >
                            <span className="material-icons-outlined border bg-indigo-600 rounded-full text-slate-100">
                                add
                            </span>
                        </button>
                    </div>

                    {/* Notes Section */}
                    <div className="flex-1 mt-4 overflow-y-auto max-h-[calc(100vh-200px)]  h-full">
                        <div className=" pb-20 ">
                            {/* Pinned Notes */}
                            {pinnednotes.length > 0 && (
                                <div>
                                    <h1 className="mb-2">Pinned Notes</h1>
                                    <div className="flex flex-wrap gap-4">
                                        {pinnednotes.map((item) => (
                                            <Notes
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                text={item.text}
                                                ispinned={item.ispinned}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Other Notes */}
                            {othernotes.length > 0 && (
                                <div>
                                    <h1 className="mt-4 mb-2">Other Notes</h1>
                                    <div className="flex flex-wrap gap-4">
                                        {othernotes.map((item) => (
                                            <Notes
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                text={item.text}
                                                ispinned={item.ispinned}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
