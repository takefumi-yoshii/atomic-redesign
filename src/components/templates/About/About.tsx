import * as React from "react";
import styles from "./styles.module.css";

export const About = () => (
  <main className={styles.module}>
    <h2 className={styles.title}>About</h2>
    <section>
      <article>
        <h3>The gap between Atomic Design and application design</h3>
        <p className={styles.image}>
          <img src="/images/01-atomic-design.png" alt="atomic-design" />
        </p>
        <p>
          The original Atomic Design is a design concept for building a design
          system. It is suitable for building a disciplined UI with the aim of
          increasing reusability with a module system. Before adopting this
          design concept as it is, there are some things to check.
        </p>
        <p>
          <em>"Is the design target a design system?"</em> If your development
          target is an application, the answer to this question is "No". I think
          this is the difference between whether Atomic Design is operating well
          or not.
        </p>
        <p>
          Atomic ReDesign that <em>"Redefines the Atom"</em> while keeping the
          convention of "atom = minimum module unit". This is based on the
          perspective that "the smallest unit of an indivisible module is not
          the UI" when building an application. The smallest module unit
          advocated by Atomic ReDesign is <em>"Dependencies"</em>.
        </p>
      </article>
    </section>
    <section>
      <h2>Redefinition of atoms</h2>
      <article>
        <p>
          What kind of change will come by redefining the smallest unit, atom,
          as a "Dependencies"?
        </p>
      </article>
      <article>
        <h3>Atoms</h3>
        <p>
          Atoms are the smallest unit for building a module. In the case of a
          design system, the smallest indivisible unit is the button UI, etc.,
          but in Atomic ReDesign, the smallest unit is unidirectional reference
          dependency such as <em>"Props"</em>. This means that
          <em>
            does not classify by "component particle size" such as "button /
            card / layout"
          </em>
          .
        </p>
        <p className={styles.image}>
          <img src="/images/02-atoms.png" alt="atoms" />
        </p>
      </article>
      <article>
        <h3>Molecules</h3>
        <p>
          The original Molecules represents a meaningful UI. For example, you
          can establish a UI by aligning "title / button / input area". In the
          case of the component used for the application, not only Props but
          also <em>Local State</em> is kept inside the component, and
          <em>state and value may be interdependent</em>. Atomic ReDesign
          considers the interdependencies closed within this component to be one
          Molecules.
        </p>
        <p className={styles.image}>
          <img src="/images/03-molecules.png" alt="molecules" />
        </p>
      </article>
      <article>
        <h3>Organisms</h3>
        <p>
          Organisms is a complex built with Atoms and Molecules. For Atomic
          ReDesign, <em>Global State</em> is included as a dependency factor.
          React's standard Context API is taken as an example here, but it can
          be a Global State provided by a third-party library.
        </p>
        <p className={styles.image}>
          <img src="/images/04-organisms.png" alt="organisms" />
        </p>
        <p>
          Here, let's look back on the major classification "System / Product"
          defined by the original Atomic Design. This classification is boundary
          between "general purpose and non-general purpose".
        </p>
        <p className={styles.image}>
          <img src="/images/01-atomic-design.png" alt="atomic-design" />
        </p>
        <p>
          This boundary is also followed by Atomic ReDesign. It means that the
          components belonging to Organisms depend on
          <em>Global State "System Context"</em>.
        </p>
        <p className={styles.image}>
          <img src="/images/05-organisms.png" alt="organisms" />
        </p>
        <p>
          This means that any component that depends on a "System Context" will
          be as Organisms. "Button / card / layout" etc.
          <em>We do not classify by "component particle size".</em> This
          constraint release promotes optimization of redrawing design in
          component design.
        </p>
        <p className={styles.image}>
          <img src="/images/06-organisms.png" alt="organisms" />
        </p>
        <p>
          To summarize the story so far, the illustrated ◉ looks like a
          correlation diagram of stakeholders who share states and values. It's
          also a community that shares a particular Sytem Context.
        </p>
      </article>
      <article>
        <h3>Templates</h3>
        <p>
          In Atomic ReDesign, template indicates that it contains a
          <em>"Product Context"</em> dependency. In contrast to Organisms, which
          depend on a "System Context", the "specific use case" paired with a
          page is the Product Context. It can also be said that the Product
          Context holds page-specific information.
        </p>
        <p className={styles.image}>
          <img src="/images/07-templates.png" alt="templates" />
        </p>
        <p>
          In addition to those that depend on the "Product Context", small
          components that are not intended to be reused as the "System" are also
          stored in the module as parts that build the template. The process of
          subdividing a component into smaller pieces is more precious than
          anything else, and non-dispersive conventions keep your coding
          focused.
        </p>
      </article>
      <article>
        <h3>Pages</h3>
        <p>
          FWs such as Next.js define a page along with routing. It is your
          responsibility to fetch the values ​​sent and received from the fetch
          API and serverside into the template. It is also the connection point
          with each Context Provider of "System / Product".
        </p>
        <p className={styles.image}>
          <img src="/images/08-pages.png" alt="pages" />
        </p>
        <p>
          Atomic ReDesign replaces the atomic unit from "UI" to "dependence",
          but the flow / division thesaurus that builds the final product
          follows the original Atomic Design as it is. The process of dividing
          into atoms is equivalent to the process of refactoring, which
          gradually removes dependence.
        </p>
        <p>
          By performing "redefinition of atoms" as explained, it is possible to
          make the design rules suitable for the development target. In this
          article, we focused on the differences between atoms in "design system
          design / application design", but redefining atoms other than
          "state-dependent" does not mean that they can be applied to modular
          design in general. Is not it.
        </p>
      </article>
    </section>
  </main>
);
