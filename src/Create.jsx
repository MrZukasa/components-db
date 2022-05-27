const Create = () => {
    return (
        <div className="container" class="content">
            <form class="mt-5">
                <div class="grid xl:grid-cols-5 xl:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="ID" class="peer" placeholder=" "/>
                        <label for="ID">ID</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codice" class="peer" placeholder=" "/>
                        <label for="codice">Codice</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codiceCostruttore" class="peer" placeholder=" "/>
                        <label for="codiceCostruttore">Codice Costruttore</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="descrizione" class="peer" placeholder=" "/>
                    <label for="descrizione">Descrizione</label>
                </div>
                <div class="grid xl:grid-cols-5 xl:gap-6">
                    <div class="relative z-0 w-full mb-6 group col-span-3">
                        <input type="text" name="costruttore" class="peer" placeholder=" "/>
                        <label for="costruttore">Costruttore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="quantita" class="peer" placeholder=" "/>
                        <label for="quantita">Quantità</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="posizione" class="peer" placeholder=" "/>
                        <label for="posizione">Posizione</label>
                    </div>
                </div>
                <div class="grid xl:grid-cols-3 xl:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore1" class="peer" placeholder=" "/>
                        <label for="rivenditore1">Primo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore2" class="peer" placeholder=" "/>
                        <label for="rivenditore2">Secondo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore3" class="peer" placeholder=" "/>
                        <label for="rivenditore3">Terzo rivenditore</label>
                    </div>
                </div>
                <button type="submit" class="text-white bg-violet-500 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">Aggiungi</button>
            </form>
        </div>
    );
}
 
export default Create;