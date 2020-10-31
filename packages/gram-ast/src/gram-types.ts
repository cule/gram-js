/**
 * # Gram AST Types
 *
 * These AST elements
 *
 * References:
 *
 * - [unist](https://github.com/syntax-tree/unist) - Universal Synax Tree
 * - [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
 * @packageDocumentation
 */

import {
  Parent as UnistParent,
  Literal as UnistLiteral,
  Node as UnistNode,
} from 'unist';

///////////////////////////////////////////////////////////////////////////////
// Base ast types...

/**
 * The base type for all path-like elements.
 */
export interface GramPathlike extends UnistNode {
  /**
   * A unique path identifier.
   *
   * For example, 'a' in `()-[a]->()` or '1' in `(1)`
   */
  id?: string;

  /**
   * The relationship between the left and right children,
   * or a 'pair' that associates without being navigable.
   */
  relation?: Relation;

  /**
   * Labels are content.
   *
   * For example, 'Aye' in (:Aye)
   */
  labels?: string[];

  /**
   * The data content of the element.
   *
   */
  record?: GramRecord;

  children?: GramPath[] | [];
}

///////////////////////////////////////////////////////////////////////////////
// Pathlike types...

/**
 * GramPath contains nodes, edges and other paths that have been composed
 * into a path expression.
 *
 * - denoted with matching, non-empty square brackets: `[id]`
 * - path equivalence: `[]`
 * - identity: yes (required)
 * - children: yes (optional)
 * - labels: yes
 * - record: yes
 * - path length: sum(children[0].length, children[1].length)
 * - path cardinality: nodes().length
 * - information role: data annotation
 */
export interface GramPath extends GramPathlike, UnistParent {
  /**
   * Type discriminator for this AST element, always 'path'.
   */
  type: 'path';

  /**
   * Either:
   * - no children
   * - a single child with an implied RHS empty path
   * - two children which are composed into a path
   */
  children: [] | [GramPath] | [GramPath, GramPath];
}

/**
 * Type guard for a Path.
 *
 * @param o any object
 */
export const isGramPath = (o: any): o is GramPath =>
  !!o.type && o.type === 'path';

export const EMPTY_PATH_ID = 'ø';

/**
 * A GramUnit is an empty path expression which contains no sub-paths and has no identity.
 *
 * - denoted with matching square brackets: `[]`
 * - path equivalence: `[]`
 * - identity: no
 * - children: no
 * - labels: no
 * - record: no
 * - path length: 0
 * - path cardinality: 0
 * - information role: emptiness
 */
export interface GramEmptyPath extends GramPathlike {
  type: 'path';

  id: 'ø';

  labels: undefined;

  record: undefined;
}

/**
 * Type guard for GramEmptyPath.
 *
 * In practice both nodes and empty paths both have no children.
 * The distinguishing feature is that all empty paths have
 * no labels, no record, and always has the identity `ø`, while
 * a node may have labels, a record and always has an identity
 * other than `ø`.
 *
 * @param o any object
 */
export const isGramEmptyPath = (o: any): o is GramEmptyPath =>
  isGramPath(o) && o.children === undefined && o.id === EMPTY_PATH_ID;

/**
 * A GramNode is a path composed of two empty paths,
 * which is equivalent to having no children.
 *
 * - denoted with matching square brackets: `()`
 * - path equivalence: `[n] =~ [n [] []] =~ (n)`
 * - identity: yes
 * - children: 0
 * - labels: yes
 * - record: yes
 * - path length: 0
 * - path cardinality: 1
 * - information role: an entity or a noun
 */
export interface GramNode extends GramPath {
  /**
   * Optimized to no children, though understood
   * to have two empty paths as children.
   */
  children: [];
}

/**
 * Type guard for GramNode.
 *
 * In practice both nodes and empty paths both have no children.
 * The distinguishing feature is that all empty paths have
 * no labels, no record, and always has the identity `ø`, while
 * a node may have labels, a record and always has an identity
 * other than `ø`.
 *
 * @param o any object
 */
export const isGramNode = (o: any): o is GramNode =>
  isGramPath(o) &&
  o.children &&
  o.children.length === 0 &&
  o.id !== EMPTY_PATH_ID;

/**
 * Navigable relations to compose path expressions.
 * Gram includes one extra relation that is not
 * navigable, the ',' pair relation used only in
 * path composition and not allowed in Edge definition.
 *
 * One of:
 *
 * - left   `(a)<--(b)`
 * - right  `(a)-->(b)`
 * - either `(a)--(b)`
 * - self   `(a) =~ (a)--(a)`
 */
export type Navigation = 'left' | 'right' | 'either';

export type Relation = Navigation | 'pair';

/**
 * GramEdge is a path composed of two GramNodes:
 *
 * - a path expression composing two nodes and a
 * - a path expression of length 1
 * - logically equivalent to an empty path (path with no children) within an enclosing path: `(n) =~ [n []]`
 * - the operand in path expressions
 * - usually a noun concept
 */
export interface GramEdge extends GramPath {
  /**
   * The operands of the Edge, known as "children" in the AST.
   *
   * children[0] is the 'left' child
   * children[1] is the 'right' child
   */
  children: [GramNode, GramNode];
}

/**
 * Type guard for GramEdge.
 *
 * @param o any object
 */
export const isGramEdge = (o: any): o is GramEdge =>
  isGramPath(o) &&
  o.relation !== undefined &&
  o.relation !== 'pair' &&
  o.children !== undefined &&
  o.children.every(child => isGramNode(child));

/**
 * A GramPathSeq is a sequence of paths.
 *
 */
export interface GramPathSeq extends GramPathlike {
  /**
   * Type discriminator for this AST element, aways 'seq'.
   */
  type: 'seq';

  children: GramPath[];
}

/**
 * Type guard for GramPathSequence.
 *
 * @param o any object
 */
export const isGramPathSequence = (o: any): o is GramPathSeq =>
  !!o.type && o.type === 'seq';

export const isGramPathlike = (o: any): o is GramPathlike =>
  isGramPath(o) ||
  isGramEmptyPath(o) ||
  isGramNode(o) ||
  isGramEdge(o) ||
  isGramPathSequence(o);

///////////////////////////////////////////////////////////////////////////////
// Records...

/**
 * GramRecordValues are a union of literals and nested records.
 */
export type GramRecordValue = GramLiteral | GramLiteral[] | GramRecord;

/**
 * A GramRecord is an order-preserving associative array of name/value pairs.
 * The AST representation is an array of GramProperty.
 *
 * Javascript lacks native support for associative arrays. Using a list
 * preserves the ordering and accepting multiple values per name.
 *
 * For convenience this can be converted to/from a GramPropertyMap,
 * which has the wrong semantics and loses information, but is
 * friendlier to use.
 */
export type GramRecord = GramProperty[];

export const isGramRecord = (v: GramRecordValue): v is GramRecord =>
  Array.isArray(v) && isGramProperty(v[0]);

export const isGramLiteralArray = (v: GramRecordValue): v is GramLiteral[] =>
  Array.isArray(v) && isLiteral(v[0]);

/**
 * A utility type for reducing a GramRecord to a key/value map.
 *
 * This is a lossy representation of a GramRecord because it drops
 * the defined order of properties.
 */
export type GramPropertyMap = { [key: string]: GramRecordValue };

/**
 * Property is a name paired with a record value.
 */
export interface GramProperty extends UnistNode {
  /**
   * Type discriminator for this AST element, always 'property'.
   */
  type: 'property';

  /**
   * The property name.
   */
  name: string;

  /**
   * The property value. Either a single literal, an array of literals, or a GramRecord.
   */
  value: GramRecordValue;
}

/**
 * Type guard for GramProperty.
 *
 * @param o any object
 */
export const isGramProperty = (o: any): o is GramProperty =>
  !!o.type && o.type === 'property';

/**
 * GramLiteral is a data value represented as plain text.
 */
export interface GramLiteral extends UnistLiteral {
  type: string;
  value: string;
}

/**
 * Type guard for GramLiteral.
 *
 * @param o any object
 */
export const isLiteral = (o: any): o is GramLiteral => !!o.type && !!o.value;

/**
 * Represents a boolean literal, like `true` or `false`.
 */
export interface BooleanLiteral extends GramLiteral {
  /**
   * Represents this variant of a Literal.
   */
  type: 'boolean';

  value: 'true' | 'false';
}

/**
 * Type guard for BooleanLiteral.
 *
 * @param o any object
 */
export const isBooleanLiteral = (o: any): o is BooleanLiteral =>
  !!o.type && !!o.value && o.type === 'boolean';

/**
 * Represents a string literal, like "hello".
 */
export interface StringLiteral extends GramLiteral {
  /**
   * Represents this variant of a Literal.
   */
  type: 'string';
}

/**
 * Type guard for StringLiteral.
 *
 * @param o any object
 */
export const isStringLiteral = (o: any): o is StringLiteral =>
  !!o.type && !!o.value && o.type === 'string';

/**
 * Represents a string value with a format indicated by a "tag".
 *
 * Some well-known tags:
 * - "md`# Hello World`"
 * - "html`<h1>Hello World</h1>`"
 * - "date`2020-07-14`"
 * - "time`17:35:42`"
 * - "uri`https://gram-data.github.io`"
 * - "wkt`POINT(-83.123 42.123)"
 *
 * @see DateLiteral
 * @see GeospatialLiteral
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export interface TaggedLiteral extends GramLiteral {
  type: 'tagged';

  /**
   * The tag prefix of the string value.
   */
  tag: string;
}

/**
 * Type guard for GramPathSequence.
 *
 * @param o any object
 */
export const isTaggedLiteral = (o: any): o is TaggedLiteral =>
  !!o.type && !!o.value && !!o.tag && o.type === 'tagged';

/**
 * Represents an integer number, like 235276234.
 */
export interface IntegerLiteral extends GramLiteral {
  type: 'integer';
}

/**
 * Type guard for IntegerLiteral.
 *
 * @param o any object
 */
export const isIntegerLiteral = (o: any): o is IntegerLiteral =>
  !!o.type && !!o.value && o.type === 'integer';

/**
 * Represents a decimal with units, like 12.4px or 42.0mm
 */
export interface MeasurementLiteral extends GramLiteral {
  type: 'measurement';

  /**
   * The unit suffix of the decimal value.
   */
  unit: string;
}

/**
 * Type guard for MeasurementLiteral.
 *
 * @param o any object
 */
export const isMeasurementLiteral = (o: any): o is MeasurementLiteral =>
  !!o.type && !!o.value && !!o.unit && o.type === 'measurement';

/**
 * Represents an decimal number, like 3.1495.
 */
export interface DecimalLiteral extends GramLiteral {
  type: 'decimal';
}

/**
 * Type guard for DecimalLiteral.
 *
 * @param o any object
 */
export const isDecimalLiteral = (o: any): o is DecimalLiteral =>
  !!o.type && !!o.value && o.type === 'decimal';

/**
 * Represents an integer expressed in hexadecimal, like 0xc0d3.
 *
 * The prefix `0x` signifies a hexadecimal value to follow.
 */
export interface HexadecimalLiteral extends GramLiteral {
  type: 'hexadecimal';
}

/**
 * Type guard for HexadecimalLiteral.
 *
 * @param o any object
 */
export const isHexadecimalLiteral = (o: any): o is HexadecimalLiteral =>
  !!o.type && !!o.value && o.type === 'hexadecimal';

/**
 * Represents an integer expressed in octal, like 01372.
 *
 * The prefix `0` signifies octal notation value to follow.
 * Without the leading 0, the number would represent an integer.
 */
export interface OctalLiteral extends GramLiteral {
  type: 'octal';
}

/**
 * Type guard for OctalLiteral.
 *
 * @param o any object
 */
export const isOctalLiteral = (o: any): o is OctalLiteral =>
  !!o.type && !!o.value && o.type === 'octal';

/**
 * Represents an ISO8601 calendar date, like `2020-02-02`.
 * @see https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates
 */
export interface DateLiteral extends TaggedLiteral {
  tag: 'date';
}

/**
 * Type guard for DateLiteral.
 *
 * Note: this does not validate the text representation.
 *
 * @param o any object
 */
export const isDateLiteral = (o: any): o is DateLiteral =>
  !!o.type && !!o.value && !!o.tag && o.type === 'tagged' && o.tag === 'date';

/**
 * Represents an ISO8601 time, like `13:47:30`.
 * @see https://en.wikipedia.org/wiki/ISO_8601#Times
 */
export interface TimeLiteral extends TaggedLiteral {
  tag: 'time';
}

/**
 * Type guard for TimeLiteral.
 *
 * Note: this does not validate the text representation.
 *
 * @param o any object
 */
export const isTimeLiteral = (o: any): o is TimeLiteral =>
  !!o.type && !!o.value && !!o.tag && o.type === 'tagged' && o.tag === 'time';

/**
 * Represents an ISO8601 date-time, like `2007-04-05T14:30Z` which is
 * a date followed by a time, separated by a 'T'.
 *
 * @see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations
 */
export interface DateTimeLiteral extends TaggedLiteral {
  tag: 'datetime';
}

/**
 * Type guard for DateTimeLiteral.
 *
 * Note: this does not validate the text representation.
 *
 * @param o any object
 */
export const isDateTimeLiteral = (o: any): o is DateTimeLiteral =>
  !!o.type &&
  !!o.value &&
  !!o.tag &&
  o.type === 'tagged' &&
  o.tag === 'datetime';

/**
 * Represents an ISO8601 duration, like `P23DT23H`.
 *
 * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
 */
export interface DurationLiteral extends TaggedLiteral {
  tag: 'duration';
}

/**
 * Type guard for DurationLiteral.
 *
 * Note: this does not validate the text representation.
 *
 * @param o any object
 */
export const isDuration = (o: any): o is DurationLiteral =>
  !!o.type &&
  !!o.value &&
  !!o.tag &&
  o.type === 'tagged' &&
  o.tag === 'duration';

/**
 * Represents an ISO8601 time interval, like `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z`.
 *
 * This can also represent a repeating interval.
 *
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
 * @see https://en.wikipedia.org/wiki/ISO_8601#Repeating_intervals
 */
export interface TimeIntervalLiteral extends TaggedLiteral {
  tag: 'interval';
}

/**
 * Type guard for TimeIntervalLiteral.
 *
 * Note: this does not validate the text representation.
 *
 * @param o any object
 */
export const isTimeInterval = (o: any): o is TimeIntervalLiteral =>
  !!o.type &&
  !!o.value &&
  !!o.tag &&
  o.type === 'tagged' &&
  o.tag === 'interval';

/**
 * Represents a WKT 2 geospatial value, like `POINT(-83.123 42.123)`
 *
 * @see http://docs.opengeospatial.org/is/18-010r7/18-010r7.html
 * @see https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry
 */
export interface WellKnownTextLiteral extends TaggedLiteral {
  tag: 'wkt';
}

/**
 * Type guard for WellKnownTextLiteral.
 *
 * @param o any object
 */
export const isWellKnownTextLiteral = (o: any): o is WellKnownTextLiteral =>
  !!o.type && !!o.value && !!o.tag && o.type === 'tagged' && o.tag === 'wkt';

/**
 * Represents a well-formed URI.
 *
 * ## Some examples:
 *
 * ### `geo`
 *
 * > A 'geo' URI identifies a physical location in a two- or three-dimensional
 * > coordinate reference system in a compact, simple, human-readable, and
 * > protocol-independent way.
 *
 * ```
 * uri`geo:48.198634,16.371648`
 * ```
 *
 * @see https://tools.ietf.org/html/rfc5870
 *
 * ### `http(s)`
 *
 */
export interface UriLiteral extends TaggedLiteral {
  tag: 'uri';
}

/**
 * Type guard for UriLiteral.
 *
 * @param o any object
 */
export const isUriLiteral = (o: any): o is UriLiteral =>
  !!o.type && !!o.value && !!o.tag && o.type === 'tagged' && o.tag === 'uri';
