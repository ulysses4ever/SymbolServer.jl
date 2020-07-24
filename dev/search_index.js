var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SymbolServer","category":"page"},{"location":"#SymbolServer","page":"Home","title":"SymbolServer","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Dev) (Image: Project Status: Active – The project has reached a stable, usable state and is being actively developed.) (Image: ) (Image: codecov.io)","category":"page"},{"location":"","page":"Home","title":"Home","text":"SymbolServer is a helper package for LanguageServer.jl that provides information about internal and exported variables of packages (without loading them). A package's symbol information is initially loaded in an external process but then stored on disc for (quick loading) future use.","category":"page"},{"location":"#Installation-and-Usage","page":"Home","title":"Installation and Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"IDEs that exploit SymbolServer should install it automatically; if you are an IDE user, you probably don't need to manually install or update SymbolServer.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Developers and curious users can install it manually with","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"SymbolServer\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"Loading it is similar to any other Julia package,","category":"page"},{"location":"","page":"Home","title":"Home","text":"using SymbolServer","category":"page"},{"location":"#Server-API","page":"Home","title":"Server API","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SymbolServerInstance(path_to_depot, path_to_store)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Creates a new symbol server instance that works on a given Julia depot. This symbol server instance can be long lived, i.e. one can re-use it for different environments etc. If path_to_store is specified, cache files will be stored there, otherwise a standard location will be used.","category":"page"},{"location":"","page":"Home","title":"Home","text":"getstore(ssi::SymbolServerInstance, environment_path::AbstractString)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Loads the symbols for the environment in environment_path. Returns a tuple, where the first element is a return status and the second element a payload. The status can be :success (in which case the second element is the new store), :canceled if another call to getstore was initiated before a previous one finished (with nothing as the payload), or :failure with the payload being the content of the error stream of the client process.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This function is long running and should typically be called in an @async block.","category":"page"},{"location":"#Indexing-API","page":"Home","title":"Indexing API","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"When a new environment is encountered, this environment must be indexed. Indexing can be run manually with the following:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using SymbolServer\nusing Packages,You,Want,To,Index\nenv = SymbolServer.getenvtree() # Create a tree of all modules within the current session, including submodules\n@time SymbolServer.symbols(env) # index everything","category":"page"},{"location":"","page":"Home","title":"Home","text":"The last line performs indexing on the complete set of modules loaded into your session. To perform indexing on a single module,","category":"page"},{"location":"","page":"Home","title":"Home","text":"@time SymbolServer.symbols(env, SomeModule) # index a single module","category":"page"},{"location":"syntax/#Syntax-Reference","page":"Syntax Reference","title":"Syntax Reference","text":"","category":"section"},{"location":"syntax/","page":"Syntax Reference","title":"Syntax Reference","text":"Modules = [SymbolServer]\nPages   = [\"syntax.md\"]","category":"page"},{"location":"syntax/","page":"Syntax Reference","title":"Syntax Reference","text":"Modules = [SymbolServer]","category":"page"},{"location":"syntax/#SymbolServer.isinmanifest","page":"Syntax Reference","title":"SymbolServer.isinmanifest","text":"isinmanifest(context, package::Union{String,UUID})\n\nChecks whether a package is in the manifest of a given context, e.g. is either directly loadable or is a dependency of an loadable package.\n\n\n\n\n\n","category":"function"},{"location":"syntax/#SymbolServer.isinproject","page":"Syntax Reference","title":"SymbolServer.isinproject","text":"isinproject(context, package::Union{String,UUID})\n\nChecks whether a package is in the dependencies of a given context, e.g. is directly loadable.\n\n\n\n\n\n","category":"function"},{"location":"syntax/#SymbolServer.load_package_from_cache_into_store!-Tuple{SymbolServerInstance,Any,Any,Any}","page":"Syntax Reference","title":"SymbolServer.load_package_from_cache_into_store!","text":"load_package_from_cache_into_store!(ssp::SymbolServerInstance, uuid, store)\n\nTries to load the on-disc stored cache for a package (uuid). Attempts to generate (and save to disc) a new cache if the file does not exist or is unopenable.\n\n\n\n\n\n","category":"method"},{"location":"syntax/#SymbolServer.manifest-Tuple{Pkg.Types.Context}","page":"Syntax Reference","title":"SymbolServer.manifest","text":"manifest(c::Pkg.Types.Context)\n\nRetrieves the manifest of a Context.\n\n\n\n\n\n","category":"method"},{"location":"syntax/#SymbolServer.maybe_fix_path-Tuple{Any}","page":"Syntax Reference","title":"SymbolServer.maybe_fix_path","text":"path = maybe_fix_path(path)\n\nReturn a normalized, absolute path for a source file path.\n\n\n\n\n\n","category":"method"},{"location":"syntax/#SymbolServer.maybe_fixup_stdlib_path-Tuple{Any}","page":"Syntax Reference","title":"SymbolServer.maybe_fixup_stdlib_path","text":"path = maybe_fixup_stdlib_path(path::String)\n\nReturn path corrected for julia issue #26314 if applicable. Otherwise, return the input path unchanged.\n\nDue to the issue mentioned above, location info for methods defined one of Julia's standard libraries are, for non source Julia builds, given as absolute paths on the worker that built the julia executable. This function corrects such a path to instead refer to the local path on the users drive.\n\n\n\n\n\n","category":"method"},{"location":"syntax/#SymbolServer.maybe_getfield-Tuple{Symbol,SymbolServer.ModuleStore,Any}","page":"Syntax Reference","title":"SymbolServer.maybe_getfield","text":"maybe_getfield(k::Symbol , m::ModuleStore, server)\n\nTry to get k from m. This includes: unexported variables, and variables exported by modules used within m.\n\n\n\n\n\n","category":"method"},{"location":"syntax/#SymbolServer.project-Tuple{Pkg.Types.Context}","page":"Syntax Reference","title":"SymbolServer.project","text":"project(c::Pkg.Types.Context)\n\nRetrieves the project of a Context.\n\n\n\n\n\n","category":"method"},{"location":"syntax/#SymbolServer.split_module_names-Tuple{Module,Any}","page":"Syntax Reference","title":"SymbolServer.split_module_names","text":"split_module_names(m::Module, allns)\n\nReturn two lists of names accessible from calling getfield(m, somename). The first contains those symbols returned byBase.names(m, all = true). The second contains all others, including imported symbols and those introduced by theusing` of modules.\n\n\n\n\n\n","category":"method"}]
}
