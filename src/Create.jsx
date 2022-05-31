import { NULL } from "mysql/lib/protocol/constants/types";
import { useState } from "react";

const Create = () => {

    const [codice, setCodice] = useState('');
    const [codiceCostruttore, setCodiceCostruttre] = useState('');
    const [descrizione, setDescrizione] = useState('');
    const [costruttore, setCostruttore] = useState('');
    const [quantita,setQuantita] = useState('');
    const [posizione, setPosizione] = useState('');
    const [rivenditore1, setRivenditore1] = useState('');
    const [rivenditore2, setRivenditore2] = useState('');
    const [rivenditore3, setRivenditore3] = useState('');
    const [note,setNote] = useState('');

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    
    const Create = (e) => {
        e.preventDefault();
        const componente = {codice, codiceCostruttore, descrizione, costruttore, quantita, posizione, rivenditore1, rivenditore2, rivenditore3, note};
        fetch('http://localhost:3001/Insert',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                codice : componente.codice,
                codiceCostruttore : componente.codiceCostruttore,
                descrizione : componente.descrizione,
                costruttore : componente.costruttore,
                quantita : componente.quantita,
                posizione : componente.posizione,
                rivenditore1 : componente.rivenditore1,
                rivenditore2 : componente.rivenditore2,
                rivenditore3 : componente.rivenditore3,
                note : componente.note
            })
        }).then(result => {
            console.log(result);
            setSuccess('Inserito con successo!');
            setTimeout(() =>{
                setSuccess('');
                window.location.reload();
            },3000)
        }).catch(e => {
            setError('Errore: ' + e.message);
            setTimeout(() =>{
                setError('');
            },3000)
        })
    }

    return (
        <div className="container" class="content">
            <form onSubmit={Create} autocomplete="off">
                <div class="grid grid-cols-4 gap-6">                    
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codice" class="peer" placeholder=" " value={codice} onChange={(e)=>setCodice(e.target.value)} required/>
                        <label for="codice">Codice</label>                        
                    </div>
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codiceCostruttore" class="peer" placeholder=" " value={codiceCostruttore} onChange={(e)=>setCodiceCostruttre(e.target.value)}/>
                        <label for="codiceCostruttore">Codice Costruttore</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="descrizione" class="peer" placeholder=" " value={descrizione} onChange={(e)=>setDescrizione(e.target.value)} required/>
                    <label for="descrizione">Descrizione</label>
                </div>
                <div class="grid grid-cols-5 gap-6">
                    <div class="relative z-0 w-full mb-6 group col-span-3">
                        <input type="text" name="costruttore" class="peer" placeholder=" " value={costruttore} onChange={(e)=>setCostruttore(e.target.value)}/>
                        <label for="costruttore">Costruttore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="quantita" class="peer" required placeholder=" " value={quantita} onChange={(e)=>{
                            if ((!isNaN(e.target.value) && (e.target.value != " "))){
                                setQuantita(e.target.value)
                            }
                        }}/>
                        <label for="quantita">Quantità</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="posizione" class="peer" placeholder=" " value={posizione} onChange={(e)=>setPosizione(e.target.value)}/>
                        <label for="posizione">Posizione</label>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore1" class="peer" placeholder=" " value={rivenditore1} onChange={(e)=>setRivenditore1(e.target.value)}/>
                        <label for="rivenditore1">Primo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore2" class="peer" placeholder=" " value={rivenditore2} onChange={(e)=>setRivenditore2(e.target.value)}/>
                        <label for="rivenditore2">Secondo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore3" class="peer" placeholder=" " value={rivenditore3} onChange={(e)=>setRivenditore3(e.target.value)}/>
                        <label for="rivenditore3">Terzo rivenditore</label>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-6">
                <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="note" class="peer" placeholder=" " value={note} onChange={(e)=>setNote(e.target.value)}/>
                        <label for="note">Note</label>
                    </div>
                </div>
                <button type="submit" class="text-white bg-violet-500 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">Aggiungi</button>
            </form>
            <br />
            <div class="flex text-gray-400 text-xl"> Response: &nbsp;
                { success && <div class=" text-green-500 text-xl flex animate-pulse">{success}</div>}
                { error && <div class=" text-red-400 text-xl flex animate-pulse">{error}</div> }            
            </div>
        </div>
    );
}
 
export default Create;