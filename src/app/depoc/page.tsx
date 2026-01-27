const userData = {
  user: {
    id: "01JM68P43G7QPHF07X67P0REAS",
    name: "Hugo",
    email: "hugo@acoh.com.br",
    username: "hugo",
    is_active: true,
    is_staff: true,
    last_login: "2025-04-29T20:23:39.909901-03:00",
    date_joined: "2025-02-15T23:16:34.529502-03:00",
  },
};

export default function Depoc() {
  return (
    <main>
      <p className="p-2 sm:p-0 sm:ml-1 mt-8 text-6xl text-start">depoc api</p>
      <section className="grid grid-cols-1 sm:grid-cols-4">
        <div>
          <div className="sm:fixed flex flex-col mt-7 p-4 min-h-96 w-ful sm:w-72 rounded-lg shadow-md bg-secondary/15 backdrop-blur-sm">
            <p className="p-1 pt-2 text-sm font-bold">depoc api</p>
            <a
              href="#introduction"
              className="p-1 pt-1 text-sm rounded-lg hover:bg-primary/5"
            >
              . introduction
            </a>
            <a
              href="#pagination"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              . pagination
            </a>
            <a
              href="#request-limits"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              . request limits
            </a>
            <a
              href="#status-codes"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              . status codes
            </a>
            <a
              href="#authentication"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              . authentication
            </a>
            <p className="p-1 pt-3 text-sm font-bold">objects</p>
            <a
              href="#user"
              className="p-1 pt-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / user
            </a>
            <a
              href="#owner"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / owner
            </a>
            <a
              href="#business"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / business
            </a>
            <a
              href="#contacts"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / contacts
            </a>
            <a
              href="#finance"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / finance
            </a>
            <a
              href="#members"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / members
            </a>
            <a
              href="#products"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / products
            </a>
            <a
              href="#payables"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / payables
            </a>
            <a
              href="#receivables"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / receivables
            </a>
            <a
              href="#orders"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              / orders
            </a>
          </div>
        </div>

        <div className="col-span-3 mt-4 sm:ml-10 p-2 sm:p-4">
          <p className="text-3xl">api reference</p>

          <section>
            <p className="mt-6 text-xl font-bold">■</p>
            <h1 id="introduction" className="text-2xl font-bold text-start">
              introduction
            </h1>

            <div className="mt-2 sm:mr-40">
              <p className="normal-case">
                Here you'll find comprehensive documentation and resources to
                help you build and integrate with the Depoc API.
              </p>
            </div>

            <article>
              <p className="mt-6 text-lg font-bold text-start">conventions</p>
              <div className="mt-2 sm:mr-40">
                <p className="normal-case">
                  The base URL to send all API requests is{" "}
                  <span className="code">https://api.depoc.com.br</span>
                  . HTTPS is required for all API requests.
                  <br />
                  <br />
                  The Depoc API follows RESTful conventions when possible, with
                  most operations performed via{" "}
                  <span className="code">GET</span>,{" "}
                  <span className="code">POST</span>,{" "}
                  <span className="code">PATCH</span>, and{" "}
                  <span className="code">DELETE</span>, requests on page and
                  database resources. Request and response bodies are encoded as
                  JSON.
                </p>
              </div>
            </article>

            <article>
              <p className="mt-6 text-lg font-bold text-start">
                json conventions
              </p>
              <div className="mt-2 sm:mr-40 normal-case">
                <p className="p-1 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  Top-level resources are wrapped by a single root property
                  whose name identifies the resource type (e.g.{" "}
                  <span className="code">user</span>,{" "}
                  <span className="code">owner</span>). This root property can
                  be used to determine the type of the resource.
                </p>
                <p className="p-1 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  Top-level resources are addressable by a ULID{" "}
                  <span className="code">id</span>, property.
                </p>
                <p className="p-1 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  Property names are in <span className="code">snake_case</span>
                  (not <span className="code">camelCase</span>, or{" "}
                  <span className="code">kebab-case</span>).
                </p>
                <p className="p-1 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  Temporal values (dates and datetimes) are encoded in ISO 8601
                  strings. Datetimes will include the time value (
                  <span className="code">2020-08-12T02:12:33.231Z</span>) while
                  dates will include only the date (
                  <span className="code">2020-08-12</span>).
                </p>
              </div>
            </article>
          </section>

          <section>
            <p className="mt-18 text-xl font-bold">■</p>
            <h1 id="pagination" className="text-2xl font-bold text-start">
              pagination
            </h1>

            <div className="mt-2 sm:mr-40">
              <p className="normal-case">
                Endpoints that may return large datasets support offset
                pagination requests. By default, Depoc returns 50 items per API
                call. If the number of items in a response from a support
                endpoint exceeds the default, then an integration can use
                pagination to request the next pages of the resource.
              </p>
            </div>

            <article>
              <p className="mt-6 text-lg font-bold text-start">
                supported endpoints
              </p>
              <span className="code">GET</span>
              <div className="mt-2 sm:mr-40 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                <table className="w-full">
                  <thead className="ring-1 ring-secondary/50 rounded-md">
                    <tr>
                      <th className="p-2 text-left">endpoint</th>
                    </tr>
                  </thead>
                  <tbody className="normal-case">
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /contact
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /contact/customer
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /contact/supplier
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /finance/accounts
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /finance/categories
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /finance/transactions
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /members
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /products
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /products/categories
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /products/costs
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /products/inventory
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /products/inventory/transactions
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /payables
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /receivables
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        /orders
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article>
              <p className="mt-6 text-lg font-bold text-start">responses</p>
              <div className="mt-2 sm:mr-40">
                <p className="normal-case">
                  If an endpoint supports pagination, then the response object
                  contains the fields
                </p>
                <div className="mt-2 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  <table className="w-full">
                    <thead className="ring-1 ring-secondary/50 rounded-md">
                      <tr>
                        <th className="p-2 text-left ring-1 ring-secondary/50 rounded-md">
                          field
                        </th>
                        <th className="p-2 text-left ring-1 ring-secondary/50 rounded-md">
                          type
                        </th>
                        <th className="p-2 text-left ring-1 ring-secondary/50 rounded-md">
                          description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="normal-case align-text-top">
                      <tr>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                          <span className="code">count</span>
                        </td>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md text-nowrap">
                          number
                        </td>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                          The number items included in the results.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                          <span className="code">next</span>
                        </td>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md text-nowrap">
                          string | null
                        </td>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                          Link the the next page if any.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                          <span className="code">previous</span>
                        </td>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md text-nowrap">
                          string | null
                        </td>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                          Link the the previous page if any.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                          <span className="code">results</span>
                        </td>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md text-nowrap">
                          array
                        </td>
                        <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                          The list, or partial list, of endpoint-specific
                          results.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </section>

          <section>
            <p className="mt-18 text-xl font-bold">■</p>
            <h1 id="request-limits" className="text-2xl font-bold text-start">
              request limits
            </h1>

            <div className="mt-2 sm:mr-40">
              <p className="normal-case">
                To ensure a consistent developer experience for all API users,
                the Depoc API is rate limited.
              </p>
            </div>

            <article className="sm:mr-40">
              <p className="mt-6 text-lg font-bold text-start">rate limit</p>
              <p className="normal-case">
                Rate-limited requests will return{" "}
                <span className="code">
                  "detail": "Request was throttled. Expected available in X
                  seconds."
                </span>{" "}
                (HTTP response status 429).
                <span className="font-bold">
                  The rate limit for incoming requests per integration is an
                  average of 60 requests per minute.
                </span>
              </p>
            </article>
          </section>

          <section>
            <p className="mt-18 text-xl font-bold">■</p>
            <h1 id="status-codes" className="text-2xl font-bold text-start">
              status codes
            </h1>

            <div className="mt-2 sm:mr-40">
              <p className="normal-case">
                Responses from the API use HTTP response codes to indicate
                general classes of success and error.
              </p>
            </div>

            <article className="sm:mr-40">
              <p className="mt-6 text-lg font-bold text-start">sucess codes</p>
              <div className="mt-2 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                <table className="w-full">
                  <thead className="ring-1 ring-secondary/50 rounded-md">
                    <tr>
                      <th className="p-2 text-left ring-1 ring-secondary/50 rounded-md">
                        http status code
                      </th>
                      <th className="p-2 text-left ring-1 ring-secondary/50 rounded-md">
                        description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="normal-case align-text-top">
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        200
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        Successfully processed the request.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        201
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        Resource created Successfully.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        204
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        Request succeeded, no data returned.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article className="sm:mr-40">
              <p className="mt-6 text-lg font-bold text-start">error codes</p>
              <div className="mt-2 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                <table className="w-full">
                  <thead className="ring-1 ring-secondary/50 rounded-md">
                    <tr>
                      <th className="p-2 text-left ring-1 ring-secondary/50 rounded-md">
                        http status code
                      </th>
                      <th className="p-2 text-left ring-1 ring-secondary/50 rounded-md">
                        description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="normal-case align-text-top">
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        400
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        • Validation error.
                        <br />
                        • Invalid request.
                        <br />
                        • Invalid JSON.
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        401
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        The bearer token is not valid.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        403
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        Client doesn't have permission to perform this
                        operation.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        404
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md text-nowrap">
                        Resource does not exist.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        405
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        Method not allowed.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        429
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        This request exceeds the number of requests allowed.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        500
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        An unexpected error occurred.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </section>

          <section>
            <p className="mt-18 text-xl font-bold">■</p>
            <h1 id="authentication" className="text-2xl font-bold text-start">
              authentication
            </h1>

            <div className="mt-2 sm:mr-40">
              <p className="normal-case">
                Requests use the HTTP{" "}
                <span className="code">Authorization</span> header to both
                authenticate and authorize operations. The Depoc API accepts
                bearer tokens in this header.
              </p>
            </div>
          </section>

          <p className="mt-18 text-3xl">objects</p>

          <section>
            <p className="mt-6 text-xl font-bold">■</p>
            <h1 id="user" className="text-2xl font-bold text-start">
              user
            </h1>

            <div className="mt-2 sm:mr-40">
              <p className="">
                Authorization{" "}
                <span className="text-sm text-tertiary">Bearer Token</span>
              </p>
            </div>

            <article className="sm:mr-40">
              <p className="mt-6 text-lg text-start">
                <span className="code text-lg">GET</span> retrieve current user
              </p>
              <span className="code normal-case">
                https://api.acoh.com.br/me
              </span>

              <p className="mt-4">request</p>
              <div className="p-2 ring-1 normal-case ring-secondary/50 rounded-md bg-secondary/15">
                <span className="code">curl</span>
                <p className="mt-4">
                  <span className="code text-tertiary bg-secondary/0">
                    curl -H "Authorization: Bearer TOKEN"{" "}
                  </span>
                  <span className="code text-[#618B25] bg-secondary/0">
                    https://api.acoh.com.br/me
                  </span>
                </p>
              </div>

              <div className="px-1 flex justify-between items-end relative w-full">
                <p className="mt-8">response</p>
                <div className="flex gap-2 text-sm text-primary/90">
                  <button className="px-1 mb-1.5 ring-1 ring-secondary/25 rounded-md cursor-pointer bg-secondary/15">
                    200
                  </button>
                </div>
              </div>

              <div className="p-2 ring-1 normal-case ring-secondary/50 rounded-md bg-secondary/15 overflow-scroll">
                <span className="code">json</span>
                <div className="mt-1">
                  <span className="code bg-secondary/0">
                    <pre>{colorizeJSON(userData)}</pre>
                  </span>
                </div>
              </div>
            </article>

            <article className="sm:mr-40">
              <p className="mt-10 text-lg text-start">
                <span className="code text-lg">POST</span> create account
              </p>
              <span className="code normal-case">
                https://api.acoh.com.br/accounts
              </span>

              <p className="mt-4">request</p>
              <div className="p-2 ring-1 normal-case ring-secondary/50 rounded-md bg-secondary/15">
                <span className="code">curl</span>
                <div className="mt-4">
                  <pre className="code text-[#618B25] bg-secondary/0">
                    {`curl -X POST https://api.acoh.com.br/accounts \\
  -H "Authorization: Bearer TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "nome": "Hugo",
    "email": "hugo@acoh.com.br",
    "username": "hugo"
  }'`}
                  </pre>
                </div>
              </div>

              <div className="px-1 flex justify-between items-end relative w-full">
                <p className="mt-8">response</p>
                <div className="flex gap-2 text-sm text-primary/90">
                  <button className="px-1 mb-1.5 ring-1 ring-secondary/25 rounded-md cursor-pointer bg-secondary/15">
                    200
                  </button>
                </div>
              </div>

              <div className="p-2 ring-1 normal-case ring-secondary/50 rounded-md bg-secondary/15 overflow-scroll">
                <span className="code">json</span>
                <div className="mt-1">
                  <span className="code bg-secondary/0">
                    <pre>{colorizeJSON(userData)}</pre>
                  </span>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}

function colorizeJSON(obj: any) {
  const json = JSON.stringify(obj, null, 2);
  return json.split("\n").map((line, i) => {
    let coloredLine = line
      .replace(/"(.*?)":/g, `<span style="color: #D33003;">"$1"</span>:`)
      .replace(/: "(.*?)"/g, `: <span style="color: #618B25;">"$1"</span>`)
      .replace(
        /: (true|false|null)/g,
        `: <span style="color: #0484C9;">$1</span>`,
      )
      .replace(/: (\d+)/g, `: <span style="color: red;">$1</span>`);
    return <div key={i} dangerouslySetInnerHTML={{ __html: coloredLine }} />;
  });
}
